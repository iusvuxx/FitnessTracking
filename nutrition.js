// Nutrition update: values are approximate per 100 g, not laboratory measurements.
const moreFood = `
Thịt gà đùi bỏ da|180|25|0|8|🍗
Gà quay có da|235|25|0|14|🍗
Thịt ức gà tây|135|29|0|2|🍗
Thịt heo nạc thăn|143|26|0|4|🥩
Thịt heo ba chỉ|518|9|0|53|🥩
Thịt bò nạc áp chảo|190|29|0|8|🥩
Thịt bò xay 10% mỡ|217|26|0|12|🥩
Thịt vịt quay|337|19|0|28|🍗
Lòng trắng trứng|52|11|1|0.2|🥚
Trứng cút|158|13|0.4|11|🥚
Cá thu|205|19|0|14|🐟
Cá mòi|208|25|0|11|🐟
Cá basa|90|15|0|3|🐟
Cá rô phi|128|26|0|3|🐟
Cá tuyết|105|23|0|1|🐟
Cá chép|127|18|0|6|🐟
Mực|92|16|3|1|🦑
Bạch tuộc|82|15|2|1|🐙
Nghêu|148|26|5|2|🐚
Cua|97|20|0|2|🦀
Hàu|81|9|5|2|🦪
Tempeh|193|20|8|11|🫘
Đậu nành luộc|172|18|8|9|🫘
Đậu lăng chín|116|9|20|0.4|🫘
Đậu đỏ chín|127|9|23|0.5|🫘
Đậu gà chín|164|9|27|3|🫘
Đậu đen chín|132|9|24|0.5|🫘
Đậu Hà Lan|81|5|14|0.4|🫛
Sữa chua không đường|61|3.5|4.7|3.3|🥛
Phô mai cottage|98|11|3|4|🧀
Phô mai mozzarella|280|28|3|17|🧀
Phô mai cheddar|403|25|1|33|🧀
Sữa đậu nành không đường|33|3|1|2|🥛
Cơm gạo lứt|123|3|26|1|🍚
Bún tươi|110|2|25|0.2|🍜
Bánh phở chín|110|2|25|0.2|🍜
Miến chín|85|0.2|21|0.1|🍜
Mì ý chín|158|6|31|1|🍝
Quinoa chín|120|4|21|2|🍚
Bánh mì nguyên cám|247|13|41|4|🍞
Bánh mì pita|275|9|56|1|🍞
Bánh tráng khô|350|6|80|1|🥟
Khoai môn|112|1.5|26|0.2|🍠
Ngô ngọt|96|3|21|1.5|🌽
Bí đỏ|26|1|7|0.1|🎃
Sắn luộc|112|1|27|0.3|🍠
Yến mạch nấu chín|71|2.5|12|1.5|🥣
Bắp cải|25|1.3|6|0.1|🥬
Cải thìa|13|1.5|2.2|0.2|🥬
Rau muống|19|2.6|3|0.2|🥬
Rau chân vịt|23|2.9|3.6|0.4|🥬
Xà lách|15|1.4|3|0.2|🥬
Dưa leo|15|0.7|3.6|0.1|🥒
Cà chua|18|0.9|3.9|0.2|🍅
Ớt chuông|31|1|6|0.3|🫑
Cà tím|25|1|6|0.2|🍆
Nấm mỡ|22|3|3|0.3|🍄
Nấm đùi gà|35|3|6|0.3|🍄
Măng tây|20|2.2|3.9|0.1|🥬
Súp lơ trắng|25|2|5|0.3|🥦
Đậu bắp|33|2|7|0.2|🥬
Bí xanh|13|0.4|3|0.1|🥒
Củ cải trắng|18|0.6|4|0.1|🥬
Hành tây|40|1|9|0.1|🧅
Xoài|60|0.8|15|0.4|🥭
Dứa|50|0.5|13|0.1|🍍
Ổi|68|2.6|14|1|🍐
Thanh long|60|1.2|13|0.4|🍉
Đu đủ|43|0.5|11|0.3|🍈
Kiwi|61|1.1|15|0.5|🥝
Dâu tây|32|0.7|8|0.3|🍓
Việt quất|57|0.7|14|0.3|🫐
Lê|57|0.4|15|0.1|🍐
Mận|46|0.7|11|0.3|🍑
Đào|39|0.9|10|0.3|🍑
Nhãn|60|1.3|15|0.1|🍈
Vải|66|0.8|17|0.4|🍒
Chôm chôm|68|0.9|16|0.2|🍒
Sầu riêng|147|1.5|27|5|🍈
Mít|95|1.7|23|0.6|🍈
Bưởi|38|0.8|10|0.1|🍊
Quýt|53|0.8|13|0.3|🍊
Hạt điều|553|18|30|44|🥜
Hạt óc chó|654|15|14|65|🥜
Hạt dẻ cười|562|20|28|45|🥜
Hạt bí|559|30|11|49|🥜
Hạt chia|486|17|42|31|🌱
Hạt lanh|534|18|29|42|🌱
Hạt hướng dương|584|21|20|51|🌱
Đậu phộng|567|26|16|49|🥜
Bơ đậu phộng|588|25|20|50|🥜
Dầu ô liu|884|0|0|100|🫒
Dầu mè|884|0|0|100|🫒
Cùi dừa|354|3|15|33|🥥
Sữa dừa|230|2|6|24|🥥
Phở bò (ước tính)|85|6|10|2.5|🍜
Phở gà (ước tính)|80|6|10|2|🍜
Bún bò Huế (ước tính)|105|6|13|3|🍜
Bún riêu (ước tính)|86|5|10|3|🍜
Hủ tiếu (ước tính)|90|5|13|2|🍜
Bánh mì thịt (ước tính)|240|10|29|9|🥖
Gỏi cuốn tôm (ước tính)|115|7|16|2.5|🥗
Bánh cuốn (ước tính)|135|5|22|3|🥟
Cơm tấm sườn (ước tính)|180|9|22|6|🍚
Xôi gà (ước tính)|200|8|33|4|🍚
Cháo thịt bằm (ước tính)|75|4|10|2|🥣
Canh chua cá (ước tính)|49|5|4|1|🍲
Bò kho (ước tính)|125|11|7|6|🍲
Chả giò chiên (ước tính)|240|8|25|12|🥟
Bánh xèo (ước tính)|190|7|22|8|🥞
Salad gà (ước tính)|110|12|5|4|🥗
Sushi cá hồi (ước tính)|160|8|24|4|🍣
Pizza phô mai (ước tính)|266|11|33|10|🍕
Hamburger bò (ước tính)|250|14|25|11|🍔
Sandwich cá ngừ (ước tính)|190|12|21|6|🥪
Súp bí đỏ (ước tính)|65|2|9|3|🍲
Sinh tố chuối sữa (ước tính)|82|3|13|2|🥤
Trứng ốp la|196|14|1|15|🍳
Khoai tây nghiền|113|2|17|4|🥔
Granola|471|10|64|20|🥣
Chocolate đen|598|8|46|43|🍫
`.trim().split('\n').map(line=>{const [name,cal,p,c,f,icon]=line.split('|');return {name,cal:+cal,p:+p,c:+c,f:+f,icon}});
foods.push(...moreFood);
// Distinct meal combinations, 50% protein ingredient and 50% carbohydrate by weight.
const proteinBases=['Ức gà','Thịt gà đùi bỏ da','Thịt heo nạc thăn','Thịt bò nạc áp chảo','Cá hồi','Cá rô phi','Cá ngừ','Tôm','Đậu phụ','Tempeh','Trứng gà','Đậu gà chín'];
const carbBases=['Cơm trắng','Cơm gạo lứt','Khoai lang','Khoai tây','Bún tươi','Mì ý chín','Quinoa chín','Ngô ngọt'];
for(const pn of proteinBases)for(const cn of carbBases){const a=foods.find(x=>x.name===pn),b=foods.find(x=>x.name===cn);if(a&&b){const item={name:`${pn} + ${cn}`,icon:'🍱',recipe:true};for(const k of ['cal','p','c','f'])item[k]=Math.round((a[k]+b[k])*5)/10;foods.push(item)}}
Object.assign(defaults.settings,{proteinGoal:120,carbGoal:220,fatGoal:65});
const macroKeys={p:'proteinGoal',c:'carbGoal',f:'fatGoal'};
const goals=()=>Object.fromEntries(Object.entries(macroKeys).map(([k,v])=>[k,+data.settings[v]||defaults.settings[v]]));
function scaleFood(item,grams){return Object.fromEntries(['cal','p','c','f'].map(k=>[k,Math.round((Number(item[k])||0)*grams/100*10)/10]))}
const prevFill=fillMeal;
fillMeal=function(item){prevFill(item);if(!item.icon)return;const form=$('entryForm'),wrap=document.createElement('label');wrap.textContent='Khẩu phần (g) · thay đổi để tính lại';const grams=document.createElement('input');grams.type='number';grams.min='1';grams.max='3000';grams.step='1';grams.value='100';grams.name='grams';grams.required=true;wrap.append(grams);const msg=document.createElement('p');msg.className='muted';msg.textContent=item.recipe?'Món kết hợp 50% mỗi thành phần, chưa gồm dầu/gia vị.':'Dinh dưỡng ước tính trên 100g; chỉnh lại nếu cần.';$('modalFields').prepend(wrap,msg);grams.oninput=()=>{for(const [k,v] of Object.entries(scaleFood(item,+grams.value)))form.elements[k].value=v};};
const categoryNames={auto:'Còn thiếu',p:'Protein',c:'Carbs',f:'Fat',light:'Ít calo',energy:'Giàu calo'};let selectedSuggestion='auto';
for(const [k,label] of Object.entries(categoryNames)){const b=document.createElement('button');b.className='btn';b.textContent=label;b.dataset.suggestion=k;b.onclick=()=>{selectedSuggestion=k;renderSuggestions()};$('suggestTabs').append(b)}
function renderSuggestions(){const g=goals(),remaining=Object.fromEntries(Object.keys(g).map(k=>[k,Math.max(0,g[k]-sum(dayMeals(),k))]));const missing=Object.keys(g).sort((a,b)=>remaining[b]/g[b]-remaining[a]/g[a])[0];const mode=selectedSuggestion==='auto'?missing:selectedSuggestion;for(const b of $('suggestTabs').children)b.classList.toggle('primary',b.dataset.suggestion===selectedSuggestion);$('suggestions').replaceChildren();$('suggestNote').textContent=`Còn thiếu: P ${fmt(remaining.p)}g · C ${fmt(remaining.c)}g · F ${fmt(remaining.f)}g`;if(selectedSuggestion==='auto'&&!Object.values(remaining).some(Boolean)){$('suggestions').textContent='Bạn đã đạt các mục tiêu macro hôm nay. Có thể chọn nhóm món để xem thêm.';return}const kcalLeft=Math.max(0,data.settings.calorieGoal-sum(dayMeals(),'cal'));const score=x=>{if(mode==='light')return -x.cal;if(mode==='energy')return x.cal;if(selectedSuggestion==='auto'){const benefit=Math.min(remaining[mode],x[mode]);return benefit/Math.max(1,x.cal)*100-Math.max(0,x.cal-kcalLeft)/100}return x[mode]};for(const item of foods.filter(x=>!x.recipe&&x.cal>=15&&!x.name.startsWith('Dầu ')).sort((a,b)=>score(b)-score(a)).slice(0,5))foodRow(item,$('suggestions'))}
// Search without diacritics and cap the initial list; search covers every entry.
const normalize=s=>s.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
const oldFoods=renderFoods;renderFoods=function(){oldFoods();const list=$('foodLibrary');list.replaceChildren();const q=normalize($('foodSearch').value.trim());const hits=foods.filter(x=>normalize(x.name).includes(q));const info=document.createElement('p');info.className='muted';info.textContent=`${hits.length} / ${foods.length} món và kết hợp · ước tính mỗi 100g`;list.append(info);let shown=0;const more=()=>{for(const item of hits.slice(shown,shown+30))foodRow(item,list);shown+=30;if(shown<hits.length){const b=document.createElement('button');b.className='btn';b.textContent='Xem thêm món';b.onclick=()=>{b.remove();more()};list.append(b)}};more();renderSuggestions()};$('foodSearch').oninput=()=>renderFoods();
const body=$('bodyGoals');let proposal=null;function calculateGoals({age,height,weight,sex,activity,goal}){const bmr=10*weight+6.25*height-5*age+(sex==='male'?5:-161),tdee=Math.round(bmr*activity);const bmi=weight/(height/100)**2;if(bmi<18.5&&['lose','fat'].includes(goal))return {error:'Không đề xuất giảm cân khi BMI dưới 18,5. Hãy hỏi chuyên gia dinh dưỡng.'};const adjustments={maintain:0,gain:250,muscle:200,lose:-250,fat:-200,recomp:0};const calorieGoal=Math.round(Math.max(bmr,tdee+adjustments[goal])/10)*10;const proteinGoal=Math.round(weight*(goal==='maintain'?1.4:1.6)),fatGoal=Math.round(calorieGoal*.28/9),carbGoal=Math.round((calorieGoal-4*proteinGoal-9*fatGoal)/4);if(carbGoal<1)return {error:'Không đủ dữ liệu để tính mục tiêu cân bằng.'};return {tdee,bmr:Math.round(bmr),calorieGoal,proteinGoal,fatGoal,carbGoal}}
body.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(body));for(const k of ['age','height','weight','activity'])v[k]=+v[k];proposal=calculateGoals(v);const result=$('goalResult');result.replaceChildren();if(proposal.error){result.textContent=proposal.error;$('applyGoals').hidden=true;return}proposal.profile=v;result.innerHTML=`<div class="goal-result"><span>TDEE ước tính</span><strong>${fmt(proposal.tdee)} kcal</strong><span>Mục tiêu mỗi ngày</span><strong>${fmt(proposal.calorieGoal)} kcal</strong><div class="goal-macros"><span>P ${proposal.proteinGoal}g</span><span>C ${proposal.carbGoal}g</span><span>F ${proposal.fatGoal}g</span></div></div>`;$('applyGoals').hidden=false};body.oninput=()=>{$('applyGoals').hidden=true;proposal=null;$('goalResult').textContent=''};
$('applyGoals').onclick=async()=>{if(!proposal||proposal.error)return;for(const k of ['calorieGoal','proteinGoal','carbGoal','fatGoal'])data.settings[k]=proposal[k];data.settings.bodyProfile=proposal.profile;await persist();render();toast('Đã áp dụng mục tiêu mới')};
$('settingsForm').onsubmit=async e=>{e.preventDefault();const v=Object.fromEntries(new FormData(e.target));for(const k of ['calorieGoal','proteinGoal','carbGoal','fatGoal','weightGoal'])data.settings[k]=+v[k];await persist();render();toast('Đã cập nhật mục tiêu')};
const prevRender=render;render=function(){prevRender();const g=goals();for(const [key,id,bar] of [['p','protein','pbar'],['c','carbs','cbar'],['f','fat','fbar']]){const have=sum(dayMeals(),key);$(id).textContent=`${fmt(have)} / ${fmt(g[key])}g`;$(id).nextElementSibling.textContent=`Còn ${fmt(Math.max(0,g[key]-have))}g`;$(bar).style.width=Math.min(100,have/g[key]*100)+'%';$('settingsForm').elements[macroKeys[key]].value=g[key]}const profile=data.settings.bodyProfile;if(profile&&!body.dataset.loaded){for(const [k,v] of Object.entries(profile))if(body.elements[k])body.elements[k].value=v;body.dataset.loaded='true'}if(!body.elements.weight.value&&data.weights.length)body.elements.weight.value=data.weights.at(-1).weight;renderSuggestions()};
// Initial render and schema defaults are safe for v1 data.
render();
