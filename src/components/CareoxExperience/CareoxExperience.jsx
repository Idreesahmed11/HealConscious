import { useState } from "react";
import BoxScreen from "./BoxScreen";
import WeeksScreen from "./WeeksScreen";
import CardsScreen from "./CardsScreen";
import CardModal from "./CardModal";
import "./CareoxExperience.css";


import w1d1 from "../../assets/w1d1.png";
import w1d2 from "../../assets/w1d2.png";
import w1d3 from "../../assets/w1d3.png";
import w1d4 from "../../assets/w1d4.png";
import w1d5 from "../../assets/w1d5.png";
import w1d6 from "../../assets/w1d6.png";
import w1d7 from "../../assets/w1d7.png";
import w2d1 from "../../assets/w2d1.png";
import w2d2 from "../../assets/w2d2.png";
import w2d3 from "../../assets/w2d3.png";
import w2d4 from "../../assets/w2d4.png";
import w2d5 from "../../assets/w2d5.png";
import w2d6 from "../../assets/w2d6.png";
import w2d7 from "../../assets/w2d7.png";
import w3d1 from "../../assets/w3d1.png";
import w3d2 from "../../assets/w3d2.png";
import w3d3 from "../../assets/w3d3.png";
import w3d4 from "../../assets/w3d4.png";
import w3d5 from "../../assets/w3d5.png";
import w3d6 from "../../assets/w3d6.png";
import w3d7 from "../../assets/w3d7.png";
import w4d1 from "../../assets/w4d1.png";
import w4d2 from "../../assets/w4d2.png";
import w4d3 from "../../assets/w4d3.png";
import w4d4 from "../../assets/w4d4.png";
import w4d5 from "../../assets/w4d5.png";
import w4d6 from "../../assets/w4d6.png";
import w4d7 from "../../assets/w4d7.png";


const IMAGE_MAP = {
  week1_day1: w1d1, week1_day2: w1d2, week1_day3: w1d3,
  week1_day4: w1d4, week1_day5: w1d5, week1_day6: w1d6, week1_day7: w1d7,
  week2_day1: w2d1, week2_day2: w2d2, week2_day3: w2d3,
  week2_day4: w2d4, week2_day5: w2d5, week2_day6: w2d6, week2_day7: w2d7,
  week3_day1: w3d1, week3_day2: w3d2, week3_day3: w3d3, week3_day4: w3d4, week3_day5: w3d5,
  week3_day6: w3d6, week3_day7: w3d7,
  week4_day1: w4d1, week4_day2: w4d2, week4_day3: w4d3,
  week4_day4: w4d4, week4_day5: w4d5, week4_day6: w4d6, week4_day7: w4d7
};

const WEEKS = [
  {
    id: 1, name: "Mindfulness in Action", shortName: "Mindfulness",
    color: "#97c459", darkBg: "#0f1a0a", accent: "#639922", 
    days: [
      { title: "Careox", theme: "", body: "Your subconscious mind holds no grudges — only possibilities.", tasks: ["5-min morning breathing exercise", "Write 3 things you are releasing", "No screens for the first 30 minutes"], image: "week1_day1" },
      { title: "Careox", theme: "", body: "Your body communicates what your mind ignores.", tasks: ["Full-body scan meditation (10 mins)", "Notice where tension lives in your body", "Gentle stretch for 10 minutes"], image: "week1_day2" },
      { title: "Careox", theme: "", body: "The mind wanders into past regrets and future anxieties. But power lives only in the present.", tasks: ["Mindful eating at one full meal", "3 grounding check-ins throughout the day", "Observe one ordinary thing deeply for 2 minutes"], image: "week1_day3" },
      { title: "Careox", theme: "", body: "Every breath is a reset button. Most people breathe unconsciously all day.", tasks: ["Box breathing: 4 rounds of 4-4-4-4", "Pause and breathe before every response", "Track your breath quality for 5 minutes"], image: "week1_day4" },
      { title: "Careox", theme: "", body: "You are not your emotions — you are the one who witnesses them.", tasks: ["Name 5 emotions without acting on them", "Journal your emotional weather today", "Take a compassion break when triggered"], image: "week1_day5" },
      { title: "Careox", theme: "", body: "Gratitude rewires the brain from scarcity to sufficiency.", tasks: ["List 10 specific, detailed gratitudes", "Genuinely thank one person in your life", "10-minute gratitude meditation before sleep"], image: "week1_day6" },
      { title: "Week Review", theme: "Integrate what you have learned", body: "Week one closes. What did you discover about your inner world?", tasks: ["Full week reflection journal entry", "Share one insight with someone you trust", "Set one mindful intention going forward"], image: "week1_day7" },
    ],
  },
  {
    id: 2, name: "Self-Reflection", shortName: "Self-Reflection",
    color: "#afa9ec", darkBg: "#100d1f", accent: "#7f77dd", icon: "🪞",
    days: [
      { title: "Careox", theme: "", body: "Start paying attention to when you are being self-critical or doubtful, and consciously shift your language to be more compassionate.", tasks: ["Practice self-compassion check-in", "Write 3 kind things about yourself", "Notice self-critical thoughts without judgment"], image: "week2_day1" },
      { title: "Careox", theme: "", body: "Work pressures, long hours, deadlines — keeping your calm starts with understanding that your life is your foundation.", tasks: ["Identify one pressure point today", "Practice the Kaizen micro-improvement", "Power of silence — sit quietly for 5 mins"], image: "week2_day2" },
      { title: "Careox", theme: "", body: "Reflect on your talents, skills, and abilities. Create a Venn diagram to find your Ikigai.", tasks: ["Create your Ikigai Venn diagram", "Identify your top strength", "Reinforce your reasoning with Why? x3"], image: "week2_day3" },
      { title: "Careox", theme: "", body: "Single tasking does not come easy. Take accountability on how well you have been following the program.", tasks: ["Reflect on single tasking progress", "Practice emotional clarity pause", "Strengthen one identified strength today"], image: "week2_day4" },
      { title: "Careox", theme: "", body: "Stepping out of our own shoes to understand how perceptions work is a powerful exercise.", tasks: ["Do the Step Out of Your Shoes exercise", "Recognise time packets in your day", "Practice non-verbal perception cues"], image: "week2_day5" },
      { title: "Careox", theme: "", body: "Move onto control boundaries. You cannot control everything. Keep your breathing and emotions steady.", tasks: ["Practice perception and resilience", "Response vs Reaction exercise", "Ikigai reflection — update your diagram"], image: "week2_day6" },
      { title: "Careox", theme: "", body: "You know how non-verbal perception cues work. Now cultivate them through practice.", tasks: ["Social detox assessment", "Accept your constraints", "Complete weekly reflection sheet"], image: "week2_day7" },
    ],
  },
  {
    id: 3, name: "Reformation", shortName: "Reformation",
    color: "#f0997b", darkBg: "#1f0d08", accent: "#d85a30", 
    days: [
      { title: "Careox", theme: "", body: "Week 3 begins — time to reform patterns and build new foundations for lasting change.", tasks: ["Identify one pattern to reform", "Take one courageous action", "Journal your reform intention"], image: "week3_day1" },
      { title: "Careox", theme: "", body: "Continuing the reformation journey — each step forward rewires your brain for better habits.", tasks: ["Practice today's reform exercise", "Notice resistance and breathe through it", "Celebrate one small win"], image: "week3_day2" },
      { title: "Careox", theme: "", body: "Stand in front of the mirror and read all the notes about yourself. Start loving your own shape.", tasks: ["Body positive mirror exercise", "Mirror affirmations practice", "Emotional tapping session"], image: "week3_day3" },
      { title: "Careox", theme: "", body: "Step outside. Sunlight triggers serotonin in your brain, acting as a natural agent to lift your mood.", tasks: ["Go outdoors and soak up sunlight", "Manage anxiety with 3-3-3 technique", "Visit Fear Box journaling"], image: "week3_day4" },
      { title: "Careox", theme: "", body: "Balance is the key to a good life, staying connected with life and managing work burdens keeps anxiety levels low.", tasks: ["Work-life balance audit", "Visit your journals from start", "Self-Love Box exercise"], image: "week3_day5" },
      { title: "Careox", theme: "", body: "Revisiting your schedules to make sure that your time is divided properly into various daily tasks.", tasks: ["Review all schedules", "Balance the four Quadrants", "Assess your progress so far"], image: "week3_day6" },
      { title: "Careox", theme: "", body: "Week 3 has ended — sit down and take a look at the weeks in a retrospective manner.", tasks: ["List all life goals afresh", "Define your responsibilities", "Self-acceptance journey reflection"], image: "week3_day7" },
    ],
  },
  {
    id: 4, name: "Cultivation", shortName: "Cultivation",
    color: "#5bbfbf", darkBg: "#091828", accent: "#2a9d8f",
    days: [
      { title: "Careox", theme: "", body: "Bring out the instruction cards from week 1, 2 and 3. List the activities that made you feel the change the most.", tasks: ["Create week 4 weekly calendar", "List cultivation activities", "Solitary retreat planning"], image: "week4_day1" },
      { title: "Careox", theme: "", body: "Celebrating your differences with the world and people around you comes with a certain level of joy.", tasks: ["Celebrate what makes you unique", "Voluntary discomfort challenge", "Full focus to loved ones"], image: "week4_day2" },
      { title: "Careox", theme: "", body: "Become aware of the narratives or stories we tell ourselves. These can be habitual and deeply ingrained.", tasks: ["Rewrite one negative story", "Emotional tapping session", "Diet check — 3-week review"], image: "week4_day3" },
      { title: "Careox", theme: "", body: "Become aware of when you are experiencing a negative thought. Mentally visualize a big red stop sign.", tasks: ["Practice red light green light", "Pomodoro technique focus session", "Revisit thought rewiring progress"], image: "week4_day4" },
      { title: "Careox", theme: "", body: "Create a Venn diagram with four circles to identify your Ikigai and areas of alignment.", tasks: ["Update your Ikigai Venn diagram", "Rewire your lifestyle calendar", "Practice non-verbal cue reading"], image: "week4_day5" },
      { title: "Careox", theme: "", body: "Meditation and exercise both focus on your body health. Pick one and embed it in your lifestyle.", tasks: ["Choose meditation or exercise path", "Pomodoro focus session", "Prepare your final schedule"], image: "week4_day6" },
      { title: "Careox", theme: "", body: "All four pillars now live in you — Mindfulness, Self-Reflection, Reformation, Cultivation. This is exactly how you begin.", tasks: ["Full 4-week reflection journal", "Commit to one daily practice going forward", "Write a letter to your future self"], image: "week4_day7" },
    ],
  },
];

export default function CareoxExperience() {
  const [screen, setScreen] = useState("box");
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [boxOpened, setBoxOpened] = useState(false);

  const handleBoxClick = () => {
    setBoxOpened(true);
    setTimeout(() => setScreen("weeks"), 900);
  };

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
    setScreen("cards");
  };

  const handleCardClick = (card, dayIndex) => {
    setSelectedCard({ ...card, dayIndex, week: selectedWeek });
  };

  const handleBack = () => {
    if (screen === "cards") {
      setScreen("weeks");
      setSelectedWeek(null);
    } else if (screen === "weeks") {
      setBoxOpened(false);
      setScreen("box");
    }
  };

  return (
    <div className="cx-root">
      <div className="cx-bg-glow" />
      {screen === "box" && (
        <BoxScreen boxOpened={boxOpened} onBoxClick={handleBoxClick} />
      )}
      {screen === "weeks" && (
        <WeeksScreen weeks={WEEKS} onWeekClick={handleWeekClick} onBack={handleBack} />
      )}
      {screen === "cards" && selectedWeek && (
        <CardsScreen
          week={selectedWeek}
          imageMap={IMAGE_MAP}
          onCardClick={handleCardClick}
          onBack={handleBack}
        />
      )}
      {selectedCard && (
        <CardModal
          card={selectedCard}
          imageMap={IMAGE_MAP}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}

export { WEEKS };
