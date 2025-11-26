import { Exercise } from '../models/exercise';

export const EXERCISES: Exercise[] = [
  {
    id: 1,
    name: "Push-up",
    difficulty: "Beginner",
    muscleGroups: ["Chest", "Triceps", "Shoulders", "Core"],
    steps: [
      "Start in a plank position with your hands slightly wider than shoulder-width apart.",
      "Keep your body in a straight line from head to heels.",
      "Lower your body until your chest nearly touches the floor.",
      "Pause, then push yourself back up to the starting position."
    ],
    imageUrl: "images/push-up.png"
  },
  {
    id: 2,
    name: "Pull-up",
    difficulty: "Intermediate",
    muscleGroups: ["Back", "Biceps", "Forearms"],
    steps: [
      "Grab the pull-up bar with your palms facing away from you and your hands shoulder-width apart.",
      "Hang with your arms fully extended.",
      "Pull your body up until your chin is above the bar.",
      "Lower yourself back down with control until your arms are fully extended."
    ],
    imageUrl: "images/pull-up.gif"
  },
  {
    id: 3,
    name: "Squat",
    difficulty: "Beginner",
    muscleGroups: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
    steps: [
      "Stand with your feet shoulder-width apart.",
      "Lower your hips back and down as if sitting in a chair.",
      "Keep your chest up and your back straight.",
      "Lower until your thighs are at least parallel to the floor.",
      "Push through your heels to return to the starting position."
    ],
    imageUrl: "images/squat.png"
  },
  {
    id: 4,
    name: "Dips",
    difficulty: "Intermediate",
    muscleGroups: ["Triceps", "Chest", "Shoulders"],
    steps: [
      "Hold onto parallel bars with your arms straight.",
      "Lower your body by bending your elbows until they are at a 90-degree angle.",
      "Keep your elbows close to your body.",
      "Push yourself back up to the starting position."
    ],
    imageUrl: "images/dips.png"
  },
  {
    id: 5,
    name: "Plank",
    difficulty: "Beginner",
    muscleGroups: ["Core", "Shoulders"],
    steps: [
      "Start in a push-up position but rest on your forearms instead of your hands.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and hold the position for the desired time.",
      "Do not let your hips sag or pike up."
    ],
    imageUrl: "images/plank.jpg"
  },
  {
    id: 6,
    name: "Lunge",
    difficulty: "Beginner",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings"],
    steps: [
      "Stand tall with feet hip-width apart.",
      "Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle.",
      "Your front knee should be directly above your ankle.",
      "Push off the front foot to return to the starting position.",
      "Repeat on the other side."
    ],
    imageUrl: "images/lunge.png"
  },
  {
    id: 7,
    name: "Burpee",
    difficulty: "Intermediate",
    muscleGroups: ["Full Body"],
    steps: [
      "Start in a standing position.",
      "Drop into a squat position with your hands on the ground.",
      "Kick your feet back into a plank position.",
      "Perform a push-up.",
      "Jump your feet back to the squat position.",
      "Jump up into the air with arms reaching overhead."
    ],
    imageUrl: "images/burpee.gif"
  },
  {
    id: 8,
    name: "Muscle-up",
    difficulty: "Advanced",
    muscleGroups: ["Back", "Chest", "Triceps", "Core"],
    steps: [
      "Hang from the bar with a false grip (wrists above the bar).",
      "Pull yourself up explosively towards the bar.",
      "Transition your chest over the bar by leaning forward.",
      "Push your body up until your arms are straight.",
      "Lower yourself back down with control."
    ],
    imageUrl: "images/muscle-up.gif"
  },
  {
    id: 9,
    name: "Pistol Squat",
    difficulty: "Advanced",
    muscleGroups: ["Quadriceps", "Glutes", "Core", "Balance"],
    steps: [
      "Stand on one leg with the other leg extended straight in front of you.",
      "Lower your hips down and back while keeping the non-working leg off the ground.",
      "Go as low as you can while maintaining balance.",
      "Push through your heel to stand back up."
    ],
    imageUrl: "images/pistol-squat.png"
  },
  {
    id: 10,
    name: "Handstand Push-up",
    difficulty: "Advanced",
    muscleGroups: ["Shoulders", "Triceps", "Core"],
    steps: [
      "Kick up into a handstand against a wall.",
      "Lower your head towards the floor by bending your elbows.",
      "Push yourself back up until your arms are fully extended.",
      "Maintain a tight core throughout the movement."
    ],
    imageUrl: "images/handstand-push-up.png"
  }
];
