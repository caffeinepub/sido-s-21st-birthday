import { useEffect, useRef, useState } from "react";

/* ─── Fade-in hook via Intersection Observer ─── */
function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("fade-in-hidden");
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of document.querySelectorAll(".fade-in-hidden")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

/* ─── Stagger hook for Section 10 ─── */
function useStagger() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => {
              el.classList.remove("stagger-hidden");
              el.classList.add("stagger-visible");
              el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            }, delay);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    for (const el of document.querySelectorAll(".stagger-hidden")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

/* ─── Shared Section Heading ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="fade-in-hidden font-playfair text-4xl md:text-5xl font-bold text-center mb-14"
      style={{ color: "#2D3436", letterSpacing: "0.01em" }}
    >
      {children}
    </h2>
  );
}

/* ─── Section 1: Hero ─── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ background: "#FFF9F5" }}
    >
      {/* Floating decorations */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="float-heart absolute top-[15%] left-[8%] text-3xl">
          💗
        </span>
        <span className="float-heart absolute top-[25%] right-[10%] text-2xl">
          ✨
        </span>
        <span className="float-heart absolute bottom-[20%] left-[12%] text-xl">
          🌸
        </span>
        <span className="float-heart absolute bottom-[30%] right-[8%] text-2xl">
          💕
        </span>
        <span className="float-heart absolute top-[60%] left-[5%] text-lg">
          🌷
        </span>
        <span className="sparkle absolute top-[10%] right-[20%] text-3xl">
          ⭐
        </span>
        <span className="sparkle absolute bottom-[15%] right-[18%] text-xl">
          ✨
        </span>
      </div>

      <div className="relative z-10 max-w-3xl">
        <p
          className="font-playfair font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            color: "#2D3436",
            letterSpacing: "0.02em",
          }}
        >
          HAPPIEST BIRTHDAYYYYYYYY MY SIDOOOOO 🎂❤️
        </p>
        <p
          className="font-playfair italic mb-4"
          style={{ fontSize: "1.3rem", color: "#E8A2A2" }}
        >
          Scroll slowlyyyy......this is your dayyyyy 😤✨
        </p>
        <p className="font-inter" style={{ fontSize: "1rem", color: "#888" }}>
          21 looks good on you baby......
        </p>
        <div className="mt-10 animate-bounce" style={{ color: "#E8A2A2" }}>
          ↓
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: How It Started ─── */
function HowItStartedSection() {
  return (
    <section className="py-20 px-6" style={{ background: "#FFF9F5" }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading>How It Started 💫</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div
            className="birthday-card fade-in-hidden p-8"
            data-ocid="how_started.item.1"
          >
            <h3
              className="font-playfair font-bold text-xl mb-4"
              style={{ color: "#E8A2A2" }}
            >
              The Annoying Phase
            </h3>
            <p
              className="font-inter leading-relaxed"
              style={{ color: "#2D3436" }}
            >
              I found him so annoying in 11th 12th 😭😂
              <br />
              Like genuinely......WHAT IS THIS GUY 😭
            </p>
          </div>
          <div
            className="birthday-card fade-in-hidden p-8"
            data-ocid="how_started.item.2"
          >
            <h3
              className="font-playfair font-bold text-xl mb-4"
              style={{ color: "#E8A2A2" }}
            >
              The Shift
            </h3>
            <p
              className="font-inter leading-relaxed"
              style={{ color: "#2D3436" }}
            >
              Then Kaulgud&apos;s happened......
              <br />
              We started talking......actually bonding......
              <br />
              And suddenly......I couldn&apos;t imagine my day without him
            </p>
          </div>
        </div>
        <div
          className="fade-in-hidden text-center font-inter leading-8"
          style={{ color: "#E8A2A2", fontSize: "1.05rem" }}
        >
          <p
            className="font-playfair font-bold text-2xl mb-3"
            style={{ color: "#2D3436" }}
          >
            15-6-22 ❤️
          </p>
          <p>Random evening......random conversation......</p>
          <p>He asked me out......</p>
          <p>And I said YES......</p>
          <p className="font-semibold">That YES changed everything......</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Our Journey ─── */
const journeyItems = [
  "Different colleges......same city......still felt far",
  "Hardly managed to talk......",
  "Started calling while going home......",
  "I learned to drive......just so I could meet you",
  "Now we fight like siblings......tease each other......and still choose each other every single day",
];

function JourneySection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-2xl mx-auto">
        <SectionHeading>Our Journey ✨</SectionHeading>
        <div className="relative pl-10">
          <div className="timeline-line" />
          {journeyItems.map((item, idx) => (
            <div
              key={item}
              className="fade-in-hidden relative mb-8 flex items-start gap-4"
              data-ocid={`journey.item.${idx + 1}`}
            >
              <div
                className="absolute -left-10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background: "#E8A2A2",
                  boxShadow: "0 0 0 4px #FFF9F5",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <p
                className="birthday-card p-4 w-full font-inter leading-relaxed"
                style={{ color: "#2D3436", fontSize: "0.97rem" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: The Real Us ─── */
const lovesList = [
  "The way he protects me without saying a word",
  "The way he looks at me like I'm the only person in the room",
  "The way he holds me when everything feels heavy",
  "The way he exists......just exists......and that's enough",
];
const toleratesList = [
  "His height (sorry not sorry)",
  "His dumb moments that make me laugh anyway",
  "His annoying habits that I secretly love",
  "His face when he pretends to be angry",
];

function TheRealUsSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>The Real Us</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="birthday-card fade-in-hidden p-8"
            data-ocid="real_us.item.1"
          >
            <h3
              className="font-playfair font-bold text-xl mb-5"
              style={{ color: "#E8A2A2" }}
            >
              What I love ❤️
            </h3>
            <ul className="space-y-3">
              {lovesList.map((l) => (
                <li
                  key={l}
                  className="font-inter flex items-start gap-2"
                  style={{ color: "#2D3436" }}
                >
                  <span style={{ color: "#E8A2A2" }}>•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="birthday-card fade-in-hidden p-8"
            data-ocid="real_us.item.2"
          >
            <h3
              className="font-playfair font-bold text-xl mb-5"
              style={{ color: "#E8A2A2" }}
            >
              What I tolerate 😤
            </h3>
            <ul className="space-y-3">
              {toleratesList.map((t) => (
                <li
                  key={t}
                  className="font-inter flex items-start gap-2"
                  style={{ color: "#2D3436" }}
                >
                  <span style={{ color: "#E8A2A2" }}>•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Our Little World ─── */
const momentsList = [
  {
    emoji: "🎬",
    text: "Movie where we talk more than we watch",
    ocid: "little_world.item.1",
  },
  {
    emoji: "🚗",
    text: "Random drives with no destination",
    ocid: "little_world.item.2",
  },
  {
    emoji: "🍟",
    text: "Fighting over the fries",
    ocid: "little_world.item.3",
  },
  {
    emoji: "📱",
    text: "Late night calls about nothing",
    ocid: "little_world.item.4",
  },
  {
    emoji: "🚶",
    text: "The way you always walk behind me",
    ocid: "little_world.item.5",
  },
  {
    emoji: "💬",
    text: "Your 'reached?' text......every single time",
    ocid: "little_world.item.6",
  },
];

function OurLittleWorldSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>These are my favorite things ❤️</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {momentsList.map((m) => (
            <div
              key={m.ocid}
              className="birthday-card fade-in-hidden p-6 text-center flex flex-col items-center gap-3"
              data-ocid={m.ocid}
            >
              <span className="text-3xl">{m.emoji}</span>
              <span
                className="font-inter"
                style={{
                  color: "#2D3436",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {m.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Things I Notice ─── */
const thingsList = [
  {
    text: "You switch sides while crossing roads......every single time",
    ocid: "notice.item.1",
    num: 1,
  },
  {
    text: "You scold me for not eating......then feed me yourself",
    ocid: "notice.item.2",
    num: 2,
  },
  {
    text: "You hold me when I'm about to fall......literally and emotionally",
    ocid: "notice.item.3",
    num: 3,
  },
  {
    text: "You remember small things I said months ago",
    ocid: "notice.item.4",
    num: 4,
  },
  {
    text: "You stay even when I'm being impossible",
    ocid: "notice.item.5",
    num: 5,
  },
  {
    text: "You just......take care of me......without making it a thing",
    ocid: "notice.item.6",
    num: 6,
  },
];

function ThingsINoticeSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>
          You think I don&apos;t notice......but I do 😤
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {thingsList.map((t) => (
            <div
              key={t.ocid}
              className="birthday-card fade-in-hidden p-6"
              data-ocid={t.ocid}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-bold text-white"
                style={{ background: "#E8A2A2" }}
              >
                {t.num}
              </div>
              <p
                className="font-inter leading-relaxed"
                style={{ color: "#2D3436", fontSize: "0.95rem" }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: If I Met You Again ─── */
function IfIMetYouSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-2xl mx-auto">
        <SectionHeading>If I Met You Again</SectionHeading>
        <div className="birthday-card fade-in-hidden p-10 text-center relative">
          <div
            className="absolute top-4 left-6 font-playfair text-7xl leading-none select-none"
            style={{ color: "#F0E5E0" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div
            className="relative z-10 font-playfair italic text-xl leading-10"
            style={{ color: "#2D3436" }}
          >
            <p>If I met you again......</p>
            <br />
            <p>I would still find you annoying first 😭😂</p>
            <br />
            <p>But I would still become your friend......</p>
            <br />
            <p>Still sit near you at Kaulgud&apos;s......</p>
            <br />
            <p>Still wait for that random evening......</p>
            <br />
            <p style={{ color: "#E8A2A2", fontWeight: 700 }}>
              And I would still say YESSSSS again ❤️
            </p>
          </div>
          <div
            className="absolute bottom-4 right-6 font-playfair text-7xl leading-none select-none rotate-180"
            style={{ color: "#F0E5E0" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: The Contract ─── */
function TheContractSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-xl mx-auto">
        <SectionHeading>The Contract 📜</SectionHeading>
        <div
          className="fade-in-hidden"
          style={{ transform: "rotate(-1.5deg)", transformOrigin: "center" }}
        >
          <div
            className="p-10 text-center"
            style={{
              background: "white",
              borderRadius: "20px",
              border: "2px dashed #E8A2A2",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <p
              className="font-playfair text-lg leading-9"
              style={{ color: "#2D3436" }}
            >
              I promise to annoy you forever......
              <br />
              Fight with you for no reason......
              <br />
              Love you more after every fight......
            </p>
            <div
              className="my-6 space-y-1 font-inter"
              style={{ color: "#2D3436" }}
            >
              <p>No cancellation ❌</p>
              <p>No refund ❌</p>
            </div>
            <p className="font-playfair text-2xl" style={{ color: "#E8A2A2" }}>
              Valid for lifetime 🥺
            </p>
            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid #F0E5E0" }}
            >
              <p
                className="font-playfair italic text-lg"
                style={{ color: "#888" }}
              >
                — Your girlfriend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 9: Spot the Truth ─── */
const quizOptions = [
  "I don't annoy you",
  "I don't love you",
  "I can stay without you",
];

function SpotTheTruthSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  function handleOption(i: number) {
    setSelected(i);
    setShowMessage(true);
  }

  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-xl mx-auto">
        <SectionHeading>Spot the Truth 🤔</SectionHeading>
        <div className="birthday-card fade-in-hidden p-10 text-center">
          <p
            className="font-playfair text-2xl font-bold mb-8"
            style={{ color: "#2D3436" }}
          >
            Which one is true?
          </p>
          <div className="flex flex-col gap-4">
            {quizOptions.map((opt, i) => (
              <button
                type="button"
                key={opt}
                data-ocid={`quiz.button.${i + 1}`}
                onClick={() => handleOption(i)}
                className="w-full py-3 px-6 rounded-full font-inter font-medium transition-all duration-200"
                style={{
                  background: selected === i ? "#E8A2A2" : "transparent",
                  color: selected === i ? "white" : "#2D3436",
                  border: "2px solid #E8A2A2",
                  cursor: "pointer",
                  transform: selected === i ? "scale(1.03)" : "scale(1)",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          {showMessage && (
            <div
              className="mt-8 py-4 px-6 rounded-2xl"
              style={{
                background: "#FFF0F0",
                border: "1px solid #E8A2A2",
              }}
              data-ocid="quiz.success_state"
            >
              <p
                className="font-playfair italic text-lg"
                style={{ color: "#E8A2A2" }}
              >
                None 😤......You&apos;re stuck with me forever
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 10: One Line Love ─── */
const loveLines = [
  { text: "my comfort", rose: false },
  { text: "my habit", rose: false },
  { text: "my chaos", rose: false },
  { text: "my peace", rose: false },
  { text: "my person", rose: false },
  { text: "my sidoooo", rose: true },
];

function OneLineLoveSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#2D3436" }}>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        {loveLines.map((line, i) => (
          <p
            key={line.text}
            className="stagger-hidden font-playfair"
            data-delay={i * 200}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: line.rose ? "#E8A2A2" : "#FFF9F5",
              letterSpacing: "0.03em",
              fontStyle: "italic",
            }}
          >
            {line.text}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ─── Section 11: Our Future ─── */
const futureList = [
  { emoji: "🌙", text: "More night drives", ocid: "future.item.1" },
  { emoji: "☀️", text: "More lazy Sundays", ocid: "future.item.2" },
  { emoji: "😭", text: "More stupid fights 😭😂", ocid: "future.item.3" },
  { emoji: "💬", text: 'More "have you reached?"', ocid: "future.item.4" },
  { emoji: "🤗", text: "More of your hugs", ocid: "future.item.5" },
  { emoji: "💕", text: "More us......always", ocid: "future.item.6" },
];

function OurFutureSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>What&apos;s next for us? 🥺</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {futureList.map((f) => (
            <div
              key={f.ocid}
              className="birthday-card fade-in-hidden p-6 text-center flex flex-col items-center gap-3"
              data-ocid={f.ocid}
            >
              <span className="text-3xl">{f.emoji}</span>
              <p
                className="font-inter"
                style={{ color: "#2D3436", fontSize: "0.97rem" }}
              >
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 12: Final Message ─── */
function FinalMessageSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFF9F5", borderTop: "1px solid #F0E5E0" }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="birthday-card fade-in-hidden p-10 text-center">
          <div
            className="font-playfair text-lg leading-10"
            style={{ color: "#2D3436" }}
          >
            <p>Even if we don&apos;t meet everyday......</p>
            <br />
            <p
              style={{ color: "#E8A2A2", fontWeight: 700, fontSize: "1.3rem" }}
            >
              You are still my everyday ❤️
            </p>
            <br />
            <p>
              Happy 21st birthday my sidoooo......my bear......my annoying short
              king 👑😂
            </p>
            <br />
            <p>
              I love you with all my heart......with all my body......with
              everything I have
            </p>
            <br />
            <p
              className="font-bold"
              style={{ color: "#E8A2A2", fontSize: "1.1rem" }}
            >
              You are my best chapter......and we are just getting started
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Cake Component ─── */
function BirthdayCake({
  candleBlown,
  onBlowCandle,
}: { candleBlown: boolean; onBlowCandle: () => void }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 32,
      }}
    >
      {/* Candle */}
      <button
        type="button"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 0,
          cursor: "pointer",
          background: "transparent",
          border: "none",
          padding: 0,
        }}
        onClick={onBlowCandle}
        onTouchEnd={(e) => {
          e.preventDefault();
          onBlowCandle();
        }}
        title="Tap to blow the candle!"
        data-ocid="cake.canvas_target"
      >
        {/* Flame or smoke */}
        {!candleBlown ? (
          <div
            style={{
              width: 14,
              height: 22,
              borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
              background:
                "linear-gradient(180deg, #FFD700 0%, #FF8C00 60%, #FF4500 100%)",
              animation: "flicker 0.9s ease-in-out infinite alternate",
              boxShadow: "0 0 10px 4px rgba(255,200,0,0.5)",
              marginBottom: 2,
            }}
          />
        ) : (
          <div style={{ fontSize: 18, marginBottom: 2, lineHeight: 1 }}>💨</div>
        )}
        {/* Candle body */}
        <div
          style={{
            width: 10,
            height: 36,
            background: "linear-gradient(90deg, #ffe066 60%, #ffd700 100%)",
            borderRadius: 4,
            border: "1px solid #f0c040",
          }}
        />
        {!candleBlown && (
          <div
            style={{
              marginTop: 4,
              fontSize: "0.65rem",
              color: "#E8A2A2",
              fontFamily: "Inter, sans-serif",
            }}
          >
            tap to blow 🕯️
          </div>
        )}
      </button>

      {/* Cake layers */}
      {/* Layer 1 (top) */}
      <div
        style={{
          width: 100,
          height: 38,
          background: "#F9B4C8",
          borderRadius: "12px 12px 0 0",
          position: "relative",
          marginTop: 0,
          boxShadow: "0 2px 8px rgba(232,162,162,0.2)",
        }}
      >
        {/* frosting drips */}
        {[10, 28, 46, 64, 80].map((left) => (
          <div
            key={left}
            style={{
              position: "absolute",
              top: -6,
              left,
              width: 14,
              height: 14,
              background: "white",
              borderRadius: "0 0 50% 50%",
              opacity: 0.85,
            }}
          />
        ))}
      </div>
      {/* Layer 2 (mid) */}
      <div
        style={{
          width: 140,
          height: 42,
          background: "#F5A0B8",
          borderRadius: "0",
          position: "relative",
          boxShadow: "0 2px 8px rgba(232,162,162,0.15)",
        }}
      >
        {[8, 28, 48, 68, 90, 112].map((left) => (
          <div
            key={left}
            style={{
              position: "absolute",
              top: -7,
              left,
              width: 14,
              height: 14,
              background: "white",
              borderRadius: "0 0 50% 50%",
              opacity: 0.75,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: "0.7rem",
            color: "white",
            opacity: 0.7,
            letterSpacing: 2,
          }}
        >
          ✦ ✦ ✦
        </div>
      </div>
      {/* Layer 3 (bottom) */}
      <div
        style={{
          width: 180,
          height: 50,
          background: "#F08CAA",
          borderRadius: "0 0 16px 16px",
          position: "relative",
          boxShadow: "0 6px 18px rgba(232,162,162,0.25)",
        }}
      >
        {[6, 26, 46, 66, 86, 110, 132, 152].map((left) => (
          <div
            key={left}
            style={{
              position: "absolute",
              top: -7,
              left,
              width: 14,
              height: 14,
              background: "white",
              borderRadius: "0 0 50% 50%",
              opacity: 0.65,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: "0.75rem",
            color: "white",
            opacity: 0.8,
            letterSpacing: 1,
            fontFamily: "Caveat, cursive",
          }}
        >
          Happy Birthday!
        </div>
      </div>

      <style>{`
        @keyframes flicker {
          0%   { transform: scaleX(1) scaleY(1) rotate(-2deg); opacity: 1; }
          50%  { transform: scaleX(0.9) scaleY(1.08) rotate(2deg); opacity: 0.92; }
          100% { transform: scaleX(1.05) scaleY(0.95) rotate(-1deg); opacity: 0.97; }
        }
      `}</style>
    </div>
  );
}

/* ─── Birthday Song Marquee Banner ─── */
const SONG_TEXT =
  "Happy birthday to you... Happy birthday dear Sidoooo... Happy birthday to youuuu. May god bless youuu, Happy birthday to youuu!!";

function MarqueeBanner() {
  return (
    <div
      style={{
        marginTop: 36,
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#2D3436",
        padding: "12px 0",
        overflow: "hidden",
        animation: "fadeInUp 0.8s ease forwards",
        borderTop: "2px solid #E8A2A2",
        borderBottom: "2px solid #E8A2A2",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          animation: "marquee-rtl 28s linear infinite",
          fontFamily: "Playfair Display, Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "white",
          letterSpacing: "0.04em",
        }}
      >
        {SONG_TEXT}&nbsp;&nbsp;&nbsp;✨&nbsp;&nbsp;&nbsp;{SONG_TEXT}
        &nbsp;&nbsp;&nbsp;✨&nbsp;&nbsp;&nbsp;{SONG_TEXT}
        &nbsp;&nbsp;&nbsp;✨&nbsp;&nbsp;&nbsp;
      </div>
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

/* ─── Footer ─── */
function Footer() {
  const [surpriseVisible, setSurpriseVisible] = useState(false);
  const [birthdayClicked, setBirthdayClicked] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const confettiLoadedRef = useRef(false);

  // Load Caveat font
  useEffect(() => {
    const existing = document.querySelector("link[data-caveat]");
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap";
      link.setAttribute("data-caveat", "true");
      document.head.appendChild(link);
    }
  }, []);

  function fireConfetti() {
    const doConfetti = () => {
      const w = window as any;
      if (w.confetti) {
        w.confetti({
          particleCount: 160,
          spread: 90,
          origin: { y: 0.6 },
          colors: [
            "#E8A2A2",
            "#F9B4C8",
            "#FFD700",
            "#FF8C00",
            "#ffffff",
            "#a0c4ff",
          ],
        });
        confettiLoadedRef.current = true;
      } else {
        // Fallback: colored divs
        for (let i = 0; i < 30; i++) {
          const div = document.createElement("div");
          div.style.cssText = `position:fixed;top:60%;left:${Math.random() * 100}%;width:10px;height:10px;background:${["#E8A2A2", "#FFD700", "#a0c4ff"][Math.floor(Math.random() * 3)]};border-radius:50%;pointer-events:none;z-index:9999;animation:fallDown 1.5s ease-out forwards;`;
          document.body.appendChild(div);
          setTimeout(() => div.remove(), 1600);
        }
      }
    };

    if ((window as any).confetti) {
      doConfetti();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1";
      document.head.appendChild(script);
      script.onload = doConfetti;
      script.onerror = doConfetti; // fallback runs even if CDN fails
    }
  }

  function handleSurpriseClick() {
    setSurpriseVisible(true);
  }

  function handleBirthdayClick() {
    setBirthdayClicked(true);
    fireConfetti();
  }

  function handleBlowCandle() {
    if (!candleBlown) setCandleBlown(true);
  }

  return (
    <footer
      className="py-16 px-6 text-center"
      style={{
        background: "#FFF9F5",
        borderTop: "1px solid #F0E5E0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <p
        className="font-inter mb-2"
        style={{ color: "#888", fontSize: "0.9rem" }}
      >
        Made with all my love (and patience) by your girlfriend ❤️
      </p>
      <p
        className="font-inter mb-10"
        style={{ color: "#888", fontSize: "0.9rem" }}
      >
        P.S. - You still owe me that one thing 😤
      </p>

      {/* Main surprise button */}
      <button
        type="button"
        data-ocid="surprise.primary_button"
        onClick={handleSurpriseClick}
        className="inline-block py-4 px-10 rounded-full font-inter font-semibold text-white text-lg"
        style={{
          background: "#E8A2A2",
          boxShadow: "0 8px 24px rgba(232,162,162,0.4)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-3px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 14px 30px rgba(232,162,162,0.5)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 8px 24px rgba(232,162,162,0.4)";
        }}
      >
        🎁 Click here for your final birthday surprise 🎁
      </button>

      {/* Hidden surprise content — fades in */}
      <div
        style={{
          opacity: surpriseVisible ? 1 : 0,
          maxHeight: surpriseVisible ? "4000px" : "0",
          overflow: "hidden",
          transition: "opacity 0.9s ease, max-height 1.2s ease",
          pointerEvents: surpriseVisible ? "auto" : "none",
        }}
      >
        {/* Diary card */}
        <div
          style={{
            marginTop: 48,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(1.4rem,4vw,2rem)",
              color: "#2D3436",
              marginBottom: 8,
            }}
          >
            📖 My diary......for your eyes only
          </h2>
          <p
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontStyle: "italic",
              color: "#E8A2A2",
              fontSize: "1.05rem",
              marginBottom: 24,
            }}
          >
            Things I see with you......in the future
          </p>

          <div
            style={{
              background: "#FFF8E7",
              border: "1px solid #E8C88A",
              borderRadius: 16,
              padding: "32px 28px",
              boxShadow: "0 4px 24px rgba(200,160,80,0.1)",
              textAlign: "left",
              fontFamily: "Caveat, cursive",
              fontSize: "clamp(1.1rem,2.5vw,1.35rem)",
              color: "#5a3e1b",
              lineHeight: 1.9,
            }}
          >
            {[
              "10 years from now......",
              "I see us still fighting over silly things 😭😂",
              "I see you still walking behind me when we cross roads",
              "I see late night drives with no destination",
              "I see you scolding me for not eating on time",
              "I see our kids rolling their eyes at us",
              "I see chicken biryani on our table every Friday",
              "I see your hand still finding mine in the dark",
              "I see the same annoying smile that made me fall for you",
              "I see us......just us......always ❤️",
            ].map((line) => (
              <p key={line} style={{ margin: 0 }}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Happy Birthday button */}
        <div style={{ marginTop: 40 }}>
          <button
            type="button"
            data-ocid="birthday.primary_button"
            onClick={handleBirthdayClick}
            className="py-4 px-10 rounded-full font-inter font-semibold text-white text-xl"
            style={{
              background: "#E8A2A2",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(232,162,162,0.4)",
              transition: "transform 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#d88090";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#E8A2A2";
            }}
          >
            🎂 Happy Birthday Sido 🎂
          </button>
        </div>

        {/* Cake and candle — revealed after birthday button clicked */}
        {birthdayClicked && (
          <div
            style={{
              animation: "fadeInUp 0.8s ease forwards",
              marginTop: 16,
            }}
          >
            <BirthdayCake
              candleBlown={candleBlown}
              onBlowCandle={handleBlowCandle}
            />

            {/* Wish text + marquee banner after candle blown */}
            {candleBlown && (
              <>
                <div
                  style={{
                    marginTop: 32,
                    animation: "fadeInUp 0.9s ease forwards",
                    fontFamily: "Playfair Display, Georgia, serif",
                    fontSize: "clamp(1.1rem,3vw,1.5rem)",
                    color: "#E8A2A2",
                    fontStyle: "italic",
                  }}
                >
                  You made a wish......I hope it comes true 🥺❤️
                </div>
                {/* Visible inline marquee banner */}
                <MarqueeBanner />
              </>
            )}
          </div>
        )}

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fallDown {
            from { transform: translateY(0) rotate(0deg); opacity: 1; }
            to   { transform: translateY(-300px) rotate(360deg); opacity: 0; }
          }
        `}</style>
      </div>

      <p
        className="mt-12 font-inter"
        style={{ color: "#ccc", fontSize: "0.75rem" }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E8A2A2" }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  useFadeIn();
  useStagger();

  return (
    <main style={{ background: "#FFF9F5", minHeight: "100vh" }}>
      <HeroSection />
      <HowItStartedSection />
      <JourneySection />
      <TheRealUsSection />
      <OurLittleWorldSection />
      <ThingsINoticeSection />
      <IfIMetYouSection />
      <TheContractSection />
      <SpotTheTruthSection />
      <OneLineLoveSection />
      <OurFutureSection />
      <FinalMessageSection />
      <Footer />
    </main>
  );
}
