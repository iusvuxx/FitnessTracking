const DB_NAME='fittrack-local',DB_VERSION=1,STORE='state';
const defaults={settings:{calorieGoal:2000,waterGoal:2500,weightGoal:65},meals:[],workouts:[],water:[],weights:[]};
let data=structuredClone(defaults),db;
const $=id=>document.getElementById(id),today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,DB_VERSION);req.onupgradeneeded=()=>req.result.createObjectStore(STORE);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function persist(){if(!db)return;return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(data,'main');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function load(){try{db=await openDB();const saved=await new Promise((resolve,reject)=>{const r=db.transaction(STORE).objectStore(STORE).get('main');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});if(saved)data={...structuredClone(defaults),...saved,settings:{...defaults.settings,...saved.settings}}}catch(e){console.error(e);toast('Không mở được bộ nhớ cục bộ. Hãy thử trình duyệt khác.')}render()}
const fmt=n=>Math.round(n||0).toLocaleString('vi-VN');
const sum=(arr,key)=>arr.reduce((s,x)=>s+(Number(x[key])||0),0);
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2300)}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
let selectedDate=today();
function dayMeals(){return data.meals.filter(x=>x.date===selectedDate)}
function dayWorkouts(){return data.workouts.filter(x=>x.date===selectedDate)}
function dayWater(){return sum(data.water.filter(x=>x.date===today()),'ml')}
function render(){
 const meals=dayMeals(),workouts=dayWorkouts(),cal=sum(meals,'cal'),burn=sum(workouts,'cal'),goal=+data.settings.calorieGoal;
 $('todayLabel').textContent=new Date(selectedDate+'T12:00:00').toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
 $('remaining').textContent=fmt(goal-cal);$('goalLabel').textContent=fmt(goal);$('eaten').textContent=fmt(cal)+' kcal';$('burned').textContent=fmt(burn)+' kcal';
 const pct=Math.min(100,goal?cal/goal*100:0);$('calorieRing').style.setProperty('--pct',pct+'%');$('ringPct').textContent=Math.round(pct)+'%';
 const p=sum(meals,'p'),c=sum(meals,'c'),f=sum(meals,'f'),w=dayWater();
 $('protein').textContent=fmt(p)+'g';$('carbs').textContent=fmt(c)+'g';$('fat').textContent=fmt(f)+'g';$('water').textContent=fmt(w)+' ml';
 [['pbar',p/120],['cbar',c/220],['fbar',f/65],['wbar',w/data.settings.waterGoal]].forEach(([id,v])=>$(id).style.width=Math.min(100,v*100)+'%');
 $('waterGoalLabel').textContent=fmt(data.settings.waterGoal);$('workoutCount').textContent=workouts.length+' bài';$('homeBurn').textContent=fmt(burn)+' kcal';
 $('homeWeight').textContent=data.weights.length?data.weights.at(-1).weight+' kg':'Chưa nhập';
 $('mealTotal').textContent=fmt(cal)+' kcal';$('workoutTotal').textContent=fmt(burn)+' kcal';$('workoutMinutes').textContent=fmt(sum(workouts,'mins'))+' phút tập luyện';
 const types=['Bữa sáng','Bữa trưa','Bữa tối','Ăn phụ'];
 $('mealGroups').innerHTML=types.map(type=>{const arr=meals.filter(x=>x.type===type);return `<div class="card"><div class="section-title"><h2>${type}</h2><span class="muted">${fmt(sum(arr,'cal'))} kcal</span></div>${arr.length?arr.map(x=>entryHTML(x,'meal')).join(''):'<div class="muted">Chưa ghi nhận thực phẩm</div>'}</div>`}).join('');
 $('workoutList').innerHTML=workouts.length?workouts.map(x=>`<div class="card entry-card"><div><b>${escapeHTML(x.name)}</b><p>${fmt(x.mins)} phút · ${x.date}</p></div><div class="entry-actions"><b>${fmt(x.cal)} kcal</b><button class="delete-btn" data-delete="workout" data-id="${x.id}" aria-label="Xóa">×</button></div></div>`).join(''):'<div class="empty">Chưa có bài tập hôm nay. Hãy thêm hoạt động đầu tiên!</div>';
 $('weightNow').textContent=data.weights.length?data.weights.at(-1).weight+' kg':'-- kg';$('weightGoalText').textContent=data.settings.weightGoal||'--';
 const weights=data.weights.slice(-10),max=Math.max(...weights.map(x=>x.weight),1),min=Math.min(...weights.map(x=>x.weight),0);
 $('weightChart').innerHTML=weights.length?weights.map(x=>`<div class="bar-wrap"><b class="muted">${x.weight}</b><div class="bar" style="height:${Math.max(7,(x.weight-min+1)/(max-min+1)*95)}%"></div><small>${new Date(x.date+'T12:00:00').toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})}</small></div>`).join(''):'<div class="empty" style="width:100%">Chưa có dữ liệu cân nặng</div>';
 $('settingsForm').elements.calorieGoal.value=data.settings.calorieGoal;$('settingsForm').elements.waterGoal.value=data.settings.waterGoal;$('settingsForm').elements.weightGoal.value=data.settings.weightGoal;
}
function entryHTML(x,type){return `<div class="entry-card list-row"><div><b>${escapeHTML(x.name)}</b><p>${x.p||0}g protein · ${x.c||0}g carb · ${x.f||0}g fat</p></div><div class="entry-actions"><b>${fmt(x.cal)} kcal</b><button class="delete-btn" data-delete="${type}" data-id="${x.id}" aria-label="Xóa">×</button></div></div>`}
function showPage(name){document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===name));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.page===name));window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.go)));
function openModal(kind){$('modalTitle').textContent=kind==='meal'?'Thêm thực phẩm':'Thêm bài tập';$('modalFields').innerHTML=kind==='meal'?`
<label>Tên món ăn<input name="name" required maxlength="80" placeholder="Ví dụ: Cơm gà"></label>
<label>Bữa ăn<select name="type"><option>Bữa sáng</option><option>Bữa trưa</option><option>Bữa tối</option><option>Ăn phụ</option></select></label>
<label>Calo (kcal)<input name="cal" type="number" min="0" max="10000" required></label>
<div class="stats-grid"><label>Protein (g)<input name="p" type="number" min="0" value="0"></label><label>Carbs (g)<input name="c" type="number" min="0" value="0"></label><label>Fat (g)<input name="f" type="number" min="0" value="0"></label></div>`:`
<label>Tên bài tập<input name="name" required maxlength="80" placeholder="Ví dụ: Chạy bộ"></label>
<label>Thời lượng (phút)<input name="mins" type="number" min="0" max="1440" required></label>
<label>Calo tiêu hao (kcal)<input name="cal" type="number" min="0" max="10000" required></label>`;
$('entryForm').dataset.kind=kind;$('modal').hidden=false}
$('addMeal').onclick=()=>openModal('meal');$('addWorkout').onclick=()=>openModal('workout');$('closeModal').onclick=()=>$('modal').hidden=true;
$('modal').addEventListener('click',e=>{if(e.target===$('modal'))$('modal').hidden=true});
$('entryForm').onsubmit=async e=>{e.preventDefault();const fd=new FormData(e.target),v=Object.fromEntries(fd),kind=e.target.dataset.kind;const item={...v,id:crypto.randomUUID(),date:selectedDate};['cal','p','c','f','mins'].forEach(k=>{if(k in item)item[k]=Number(item[k]||0)});data[kind==='meal'?'meals':'workouts'].push(item);await persist();render();$('modal').hidden=true;e.target.reset();toast('Đã lưu vào '+selectedDate)};
$('quickWater').onclick=async()=>{data.water.push({id:crypto.randomUUID(),date:today(),ml:250});await persist();render();toast('Đã thêm 250ml nước')};
document.addEventListener('click',async e=>{const b=e.target.closest('[data-delete]');if(!b)return;const key=b.dataset.delete==='meal'?'meals':'workouts';data[key]=data[key].filter(x=>x.id!==b.dataset.id);await persist();render();toast('Đã xóa mục này')});
$('weightForm').elements.date.value=today();
$('weightForm').onsubmit=async e=>{e.preventDefault();const fd=new FormData(e.target);data.weights.push({id:crypto.randomUUID(),weight:Number(fd.get('weight')),date:fd.get('date')});data.weights.sort((a,b)=>a.date.localeCompare(b.date));await persist();render();e.target.elements.weight.value='';toast('Đã lưu cân nặng')};
$('settingsForm').onsubmit=async e=>{e.preventDefault();const fd=new FormData(e.target);data.settings={calorieGoal:Number(fd.get('calorieGoal')),waterGoal:Number(fd.get('waterGoal')),weightGoal:Number(fd.get('weightGoal'))};await persist();render();toast('Đã cập nhật mục tiêu')};
$('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify({format:'fittrack-backup-v1',exportedAt:new Date().toISOString(),data},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='fittrack-backup-'+today()+'.json';a.click();URL.revokeObjectURL(a.href);toast('Đã tạo bản sao lưu')};
$('importFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const parsed=JSON.parse(await f.text());const incoming=parsed.data||parsed;if(!incoming.settings||!Array.isArray(incoming.meals)||!Array.isArray(incoming.workouts)||!Array.isArray(incoming.weights)||!Array.isArray(incoming.water))throw Error('invalid');if(!confirm('Nhập bản sao lưu sẽ thay thế dữ liệu hiện tại. Tiếp tục?'))return;data={...structuredClone(defaults),...incoming,settings:{...defaults.settings,...incoming.settings}};await persist();render();toast('Đã khôi phục dữ liệu')}catch{toast('File sao lưu không hợp lệ')}finally{e.target.value=''}};
$('resetBtn').onclick=async()=>{if(!confirm('Xóa toàn bộ bữa ăn, bài tập, nước uống, cân nặng và cài đặt? Hành động này không thể hoàn tác.'))return;data=structuredClone(defaults);await persist();render();toast('Đã xóa dữ liệu')};
$('themeBtn').onclick=()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('fittrack-theme',dark?'dark':'light')};
if(localStorage.getItem('fittrack-theme')==='dark')document.documentElement.dataset.theme='dark';
if('serviceWorker'in navigator&&location.protocol!=='file:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.error));
load();
