// Keep a single place for nutrition targets, with manual editing under Progress.
const manualGoals=$('settingsForm');
const goalDetails=document.createElement('details');goalDetails.className='card manual-goals';
const goalSummary=document.createElement('summary');goalSummary.textContent='Chỉnh mục tiêu thủ công';goalDetails.append(goalSummary,manualGoals);manualGoals.classList.remove('card');$('bodyGoals').after(goalDetails);
$('mealTotal').closest('.card').after(document.querySelector('.smart-card'));
const additionalExercises={
 'Ngực':['Incline Barbell Press','Incline Dumbbell Press','Flat Dumbbell Press','Decline Bench Press','Machine Chest Press','Pec Deck','Cable Crossover','Chest Dip','Smith Machine Bench Press','Dumbbell Pullover'],
 'Lưng':['Pull-up','Chin-up','Barbell Row','Dumbbell Row','T-Bar Row','Seated Machine Row','Straight-arm Pulldown','Wide-grip Lat Pulldown','Close-grip Lat Pulldown','Face Pull','Back Extension','Rack Pull'],
 'Chân':['Front Squat','Hack Squat','Goblet Squat','Smith Machine Squat','Romanian Deadlift','Bulgarian Split Squat','Walking Lunge','Leg Extension','Seated Leg Curl','Lying Leg Curl','Hip Thrust','Glute Bridge','Cable Kickback','Hip Abduction','Hip Adduction','Standing Calf Raise','Seated Calf Raise','Step-up'],
 'Vai':['Dumbbell Shoulder Press','Arnold Press','Machine Shoulder Press','Cable Lateral Raise','Front Raise','Reverse Pec Deck','Rear Delt Fly','Upright Row','Barbell Shrug','Dumbbell Shrug'],
 'Tay':['Barbell Curl','Hammer Curl','Preacher Curl','Incline Dumbbell Curl','Cable Curl','Concentration Curl','EZ Bar Curl','Overhead Triceps Extension','Skull Crusher','Close-grip Bench Press','Triceps Dip','Rope Pushdown','Wrist Curl','Reverse Curl'],
 'Bụng':['Cable Crunch','Hanging Leg Raise','Reverse Crunch','Russian Twist','Ab Wheel Rollout','Side Plank','Mountain Climber','Decline Sit-up','Pallof Press','Dead Bug']
};
for(const [group,list] of Object.entries(additionalExercises))groups[group].push(...list);
const exercisePicker=document.createElement('select');exercisePicker.id='exercisePicker';exercisePicker.setAttribute('aria-label','Chọn bài tập');$('exerciseList').before(exercisePicker);
let selectedExercise='';const previousExercises=renderExercises;
renderExercises=function(){const old=selectedExercise;exercisePicker.replaceChildren();for(const name of groups[muscle]){const option=document.createElement('option');option.value=name;option.textContent=name;exercisePicker.append(option)}selectedExercise=groups[muscle].includes(old)?old:groups[muscle][0];exercisePicker.value=selectedExercise;previousExercises();for(const card of $('exerciseList').children){const name=card.querySelector('h2').textContent;const hasSets=(data.sets||[]).some(s=>s.date===$('trainingDate').value&&s.name===name);card.hidden=name!==selectedExercise&&!hasSets}for(const b of $('muscleGroups').children)b.classList.toggle('primary',b.textContent===muscle)};
exercisePicker.onchange=()=>{selectedExercise=exercisePicker.value;renderExercises()};$('trainingDate').onchange=()=>renderExercises();
const renderBeforeHomeChart=render;
render=function(){renderBeforeHomeChart();$('homeWeightNow').textContent=$('weightNow').textContent;$('homeWeightChart').replaceChildren(...Array.from($('weightChart').childNodes,node=>node.cloneNode(true)))};
render();
