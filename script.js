const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');
const enemy = document.getElementById('enemy');
const again = document.getElementById('again');



const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,
    set updateData(data){
        if(missed != 1){
        this[data]++;
        this.render();}

    },
    render(){
        record.textContent = this['record'];
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
    }
};

let missed = 0;

const show = {
    hit(){
        
    },
    miss(elem){
        if (elem.className =='miss') {
             missed = 1;
        } else {
            this.changeClass(elem, 'miss');
            missed = 0;
        };
    },
    dead(){
        
    },
    changeClass(elem, value) {
        elem.className = value;
    }
};

const fire = (event) => {
    const target = event.target
    show.miss(target);
    
    play.updateData = 'shot';
    
};

const init = () => {
    enemy.addEventListener('click', fire)
};


init();


