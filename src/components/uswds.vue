
<style media="screen">

ul {
  list-style-type: none;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
}

li {
  padding: 0 5px;
}
.weekentry
{
  display:none;
  text-align:left;
}

.weekcont
{


  display: inline-block;
  height: 417px;
  margin-bottom:50px;
  background: #FFFFFF;
border: 0.2px solid #E5E5E5;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(79, 79, 79, 0.31);
  opacity: 1;
  width:95%;
}

.weekcontinner
{
    position:relative;
}
.elipse_cont
{
  width: 50px;
  height: 50px;

}
.elipse_unchecked
{
cursor: pointer;
list-style-type: none;
position:relative;
border-radius: 50%;
top: -10px;
left: -10px;
width: 20px;
height: 20px;

background: #FFFFFF;
border: 5px solid #FFC402;
box-sizing: border-box;
  }

  .elipse_unchecked_active
  {
    top: -20px;
    left: -20px;
position:relative;
  width: 39px;
  height: 39px;
  background: #FFFFFF;
  border: 3px solid #FFC402;
  box-sizing: border-box;
  border-radius: 50%;
    }

  .elipse_center
    {
      position: relative;
      border-radius: 50%;
      top:3px;
      left:3px;
      width: 27px;
      height: 27px;
      background: #FFC402;
    display: none;
  }
  .elipse_center_active
    {
      position: relative;
      border-radius: 50%;
      top:3px;
      left:3px;
      width: 27px;
      height: 27px;
      background: #FFC402;
  }

  .elipse_unchecked:hover
  {
    top: -20px;
    left: -20px;
width: 39px;
height: 39px;
background: #FFFFFF;
border: 3px solid #FFC402;
box-sizing: border-box;
    }
    .elipse_unchecked:hover > .elipse_center
    {
        display: block;

      }
      .header {
        background: #0059FC;
        color: white;
        width: 100%;
height: 458px;
left: 0px;
top: 175px;
margin-bottom: 140px;
        text-align: left;
        padding-left: 30px;
        padding-top: 50px;
      }

      @keyframes example {
        from {right: -480px;}
        to {left: 0px;}
      }

</style>
<template>
  <div class="menu">
    <img src="../assets/header.png" alt="">
  </div>
    <div class="header">
      <div style="font-family: Roboto Mono;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 34px;
height: 45px;
left: 289px;
right: 614.74px;
top: 286px;
">
        July - Sept 2019
      </div>
<h1 style="font-family: Oswald;
font-style: normal;
font-weight: 500;
font-size: 50px;
line-height: 26px;">WORKFORCE SPRINT</h1>
<p style="font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 23px;
line-height: 33px;">Solve problems for American workers, businesses, investors, and communities by catalyzing cross-sector collaboration</p>

    </div>
    <div class="">
      <ul >
        <li v-for="(week,index) in dataui"  >
          <div @click="weekvisible(index)" class="elipse_cont">
            <div :class="[index == week_active_nr ? 'elipse_unchecked_active' : 'elipse_unchecked']">
              <div :class="[index == week_active_nr ? 'elipse_center_active' : 'elipse_center']">
              </div>
            </div>
          </div>

          </li>
      </ul>



    <div  class="">

      <div v-for="(week,index) in dataui" class="weekcont weekcontinner" :style="[week.active ? 'display:block; animation-name: example; animation-duration: 1s;' : 'display:none']">
    <h1 >WEEK {{week.weeknr}}</h1>
        <div class="">
            {{week.weekdates}}
        </div>
        <div class="">
          <hr>
            <div v-for="events in week.weekhappening" class="">
              - {{events}}
              <hr>
            </div>
        </div>
      </div>
    </div>


    </div>

      <img src="../assets/footer.png" alt="">

</template>

<script>
// Vue.use(VueAwesomeSwiper)
import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
        // import shaderString from './timeline.txt?raw'

export default {

    data() {
        return {
            showAlert: true,
            data: '',
            dataprocessed: [],
            dataui: [],
            week_active_nr:0,
            show:false,
            show1:false
        };
    },
    created() {
        // this.fetchTeam();
        this.fetchTxt();

        console.log(this.textfile);
      },
    methods: {
      fetchTxt(){


        self = this;

axios.get('https://raw.githubusercontent.com/stephan-schmidt/vite-coil/main/src/assets/timeline.txt').then(data => {
          // console.log(data.data);
          self.data = data.data;
          self.processData();
        });
      },
      weekvisible(i)
      {
        this.dataui.map( function(a,b){
          a.active = false;
        })
        this.week_active_nr = i;
        this.dataui[i].active = true;
        this.show = true;
        this["show"+i] =true;
      },
      processData (){
        // console.log(self.data);
        // var title = self.data.split("\n")[0];
        self.data = self.data.split("Week ");
        var weekarr = [];
        self.data.map( function(a,b){
          console.log(a);
          var weekobj = {};

          // if(b !=0)
          // {
            weekobj['weeknr'] = a.split("\n")[0];
            weekobj['weekdates'] = a.split("\n")[1];

            var events= a.split("\n-");
            events.shift();
            weekobj['weekhappening'] = events;
            weekobj['active'] = false;
          // }
          weekarr.push(weekobj)
        })
        weekarr.shift();
console.log(weekarr);
weekarr[0].active = true;
        self.dataui = weekarr;



      },
        onDismissed(){
            this.showAlert = false;
        }
    }
}
</script>
