"use strict";var R=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var M=(p,n)=>{for(var x in n)R(p,x,{get:n[x],enumerable:!0})},$=(p,n,x,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of X(n))!Z.call(p,o)&&o!==x&&R(p,o,{get:()=>n[o],enumerable:!(r=J(n,o))||r.enumerable});return p};var P=p=>$(R({},"__esModule",{value:!0}),p);var tt={};M(tt,{RNG:()=>U,constant:()=>q,createSampler:()=>O,createScale:()=>j,createSequence:()=>y,createSynth:()=>T,default:()=>N,getRandomInt:()=>W});module.exports=P(tt);var q={};M(q,{FREQUENCY:()=>w,Intervals:()=>k,MASTER_TUNE:()=>v,NoteNumbers:()=>G,WORK_INTERVAL:()=>B});var B=.1,v=440,w=Array(128).fill(void 0).map((p,n)=>440*Math.pow(2,(n-69)/12)),G;(t=>(t.C0=12,t.Cs0=13,t.Db0=13,t.D0=14,t.Ds0=15,t.Eb0=15,t.E0=16,t.Es0=17,t.Fb0=16,t.F0=17,t.Fs0=18,t.Gb0=18,t.G0=19,t.Gs0=20,t.Ab0=20,t.A0=21,t.As0=22,t.Bb0=22,t.B0=23,t.Bs0=24,t.Cb1=23,t.C1=24,t.Cs1=25,t.Db1=25,t.D1=26,t.Ds1=27,t.Eb1=27,t.E1=28,t.Es1=29,t.Fb1=28,t.F1=29,t.Fs1=30,t.Gb1=30,t.G1=31,t.Gs1=32,t.Ab1=32,t.A1=33,t.As1=34,t.Bb1=34,t.B1=35,t.Bs1=36,t.Cb2=35,t.C2=36,t.Cs2=37,t.Db2=37,t.D2=38,t.Ds2=39,t.Eb2=39,t.E2=40,t.Es2=41,t.Fb2=40,t.F2=41,t.Fs2=42,t.Gb2=42,t.G2=43,t.Gs2=44,t.Ab2=44,t.A2=45,t.As2=46,t.Bb2=46,t.B2=47,t.Bs2=48,t.Cb3=47,t.C3=48,t.Cs3=49,t.Db3=49,t.D3=50,t.Ds3=51,t.Eb3=51,t.E3=52,t.Es3=53,t.Fb3=52,t.F3=53,t.Fs3=54,t.Gb3=54,t.G3=55,t.Gs3=56,t.Ab3=56,t.A3=57,t.As3=58,t.Bb3=58,t.B3=59,t.Bs3=60,t.Cb4=59,t.C4=60,t.Cs4=61,t.Db4=61,t.D4=62,t.Ds4=63,t.Eb4=63,t.E4=64,t.Es4=65,t.Fb4=64,t.F4=65,t.Fs4=66,t.Gb4=66,t.G4=67,t.Gs4=68,t.Ab4=68,t.A4=69,t.As4=70,t.Bb4=70,t.B4=71,t.Bs4=72,t.Cb5=71,t.C5=72,t.Cs5=73,t.Db5=73,t.D5=74,t.Ds5=75,t.Eb5=75,t.E5=76,t.Es5=77,t.Fb5=76,t.F5=77,t.Fs5=78,t.Gb5=78,t.G5=79,t.Gs5=80,t.Ab5=80,t.A5=81,t.As5=82,t.Bb5=82,t.B5=83,t.Bs5=84,t.Cb6=83,t.C6=84,t.Cs6=85,t.Db6=85,t.D6=86,t.Ds6=87,t.Eb6=87,t.E6=88,t.Es6=89,t.Fb6=88,t.F6=89,t.Fs6=90,t.Gb6=90,t.G6=91,t.Gs6=92,t.Ab6=92,t.A6=93,t.As6=94,t.Bb6=94,t.B6=95,t.Bs6=96,t.Cb7=95,t.C7=96,t.Cs7=97,t.Db7=97,t.D7=98,t.Ds7=99,t.Eb7=99,t.E7=100,t.Es7=101,t.Fb7=100,t.F7=101,t.Fs7=102,t.Gb7=102,t.G7=103,t.Gs7=104,t.Ab7=104,t.A7=105,t.As7=106,t.Bb7=106,t.B7=107,t.Bs7=108,t.Cb8=107,t.C8=108,t.Cs8=109,t.Db8=109,t.D8=110,t.Ds8=111,t.Eb8=111,t.E8=112,t.Es8=113,t.Fb8=112,t.F8=113,t.Fs8=114,t.Gb8=114,t.G8=115,t.Gs8=116,t.Ab8=116,t.A8=117,t.As8=118,t.Bb8=118,t.B8=119,t.Bs8=120,t.Cb9=119,t.C9=120,t.Cs9=121,t.Db9=121,t.D9=122,t.Ds9=123,t.Eb9=123,t.E9=124,t.Es9=125,t.Fb9=124,t.F9=125,t.Fs9=126,t.Gb9=126,t.G9=127))(G||={});var k;(d=>(d.maj=[0,4,7],d.min=[0,3,7],d.sus4=[0,5,7],d.sus2=[0,2,7],d.aug=[0,4,8],d.dim=[0,3,6],d.six=[9],d.min7=[10],d.maj7=[11],d.add9=[14],d.add11=[17],d.add13=[19],d.major=[0,2,4,5,7,9,11],d.minor=[0,2,3,5,6,8,11],d.harmonicmin=[0,2,3,5,7,8,11],d.melodicmin=[0,2,3,5,7,9,11],d.ionian=[0,2,4,5,7,9,11],d.dorian=[0,2,3,5,7,9,10],d.phrygian=[0,1,3,5,7,8,10],d.lydian=[0,2,4,6,7,9,11],d.mixolydian=[0,2,4,5,7,9,10],d.aeolian=[0,2,3,5,7,8,10],d.locrian=[0,1,3,5,6,8,10],d.wholetone=[0,2,4,6,8,10]))(k||={});var I=p=>n=>{let{source:x,sequence:r,duration:o}=n,s=!1,e=0,h=0,a=0,i=(l,S)=>{let g=[];return l.forEach(A=>{A instanceof Array?g.push(...i(A,S/A.length)):g.push({step:A,value:S})}),g},E=r({...p.timing,loopCount:a}),c=i(E,1/E.length);return{get isActivated(){return s},set isActivated(l){s=l},get nextScheduleTime(){return e},set nextScheduleTime(l){e=l},get currentStep(){return h},schedule:(l,S)=>{let g=S*o;if(s)for(;l+.1>e;){let{step:A,value:D}=c[h];A&&[A.noteNumber].flat().forEach(C=>{x.play({noteNumber:C,startTime:e,volume:A.volume??1,duration:g*D*A.duration})}),e+=g*D,h++,h>=c.length&&(h=0,a++,c=i(r({...p.timing,loopCount:a}),1/E.length))}},source:x,sequence:r,duration:o}},_=I;var F=p=>(n,x,r,o)=>{let{attack:s,decay:e,sustain:h,release:a}=o,i=p.createGain(),E=s/1e3,c=e/1e3,f=a/1e3;i.gain.linearRampToValueAtTime(0,n),i.gain.linearRampToValueAtTime(x,n+E),i.gain.linearRampToValueAtTime(x*h,n+E+c);let l=r+f;return i.gain.linearRampToValueAtTime(0,n+E+c+l),i};var T=p=>(n=[{type:"sawtooth",detune:0,semitone:0}])=>({play:r=>{let{noteNumber:o,startTime:s,duration:e,volume:h}=r,a=r.adsr??{attack:0,decay:0,sustain:1,release:0};n.forEach(i=>{let E=F(p)(s,h,e,a);E.connect(p.destination);let c=new OscillatorNode(p,{type:i.type,detune:i.detune,frequency:w[o+i.semitone]});c.start(s),c.stop(s+e+(a?a.release/1e3:0)),c.connect(E)})}});var L=(p,n=1,x=1)=>({noteNumber:p,volume:n,duration:x});var V=({tempo:p=128,beatsParCycle:n=8})=>{let x=new AudioContext,r=60/p,o=0,s=new Map,e=0,h=()=>{for(;x.currentTime+.1>e;)o%n===0&&(console.log("---------------------"),s.forEach(c=>{c.isActivated||(c.isActivated=!0,c.nextScheduleTime=e)})),console.log({beatCount:o}),o++,e+=r;s.forEach(c=>{c.schedule(x.currentTime,r)})},a,i=()=>{a=window.setInterval(h,.1*1e3)},E=()=>clearInterval(a);return i(),{audioContext:x,tempo:p,beatsParCycle:n,beatLength:r,spells:s,beatCount:o,start:i,stop:E,get timing(){return{cycles:Math.floor(o/n),beats:o%n}},cast(c,f){let l=r*(n-o%n)*1e3-50;if(console.log({delay:l,beat:o%n}),f==null){window.setTimeout(()=>{s.delete(c)},l);return}let S=_(this)(f);window.setTimeout(()=>{s.set(c,S)},l)},useMetrognome(c=!0){if(c){let f=T(this.audioContext)([{type:"square",detune:0,semitone:0}]),l=({beats:g})=>[L(g===0?G.A6:G.A5,1,.2)],S=1;console.log({source:f,sequence:l,duration:S}),this.cast("metrognome",{source:f,sequence:l,duration:S})}else this.cast("metrognome",null)}}};var y=p=>n=>(x,r=1,o=1,s=!1)=>{let e=[],h=x.split("");for(let a=0;a<h.length;a++){let i=h[a],E=parseInt(i,16);if(!isNaN(E)){e.push({noteNumber:n[E],volume:o,duration:r});continue}if(!s){if(i==" "){e.push(null);continue}if(i=="."){let c=e.findLastIndex(f=>f!=null);c>=0?e.push(e[c]):e.push(null);continue}if(i=="?"){let c=p(0,n.length-1);e.push({noteNumber:n[c],volume:o,duration:r});continue}if(i=="-"){let c=e.findLastIndex(f=>f!=null);c>=0&&(e[c].duration+=r),e.push(null);continue}if(i=="["){let c=u("[",x,a);if(c>=0){let f=y(p)(n)(h.slice(a+1,c).join(""),r/(c-a-1),o);e.push(f),a=c}continue}if(i=="{"){let c=u("{",x,a);if(c>=0){let f=y(p)(n)(h.slice(a+1,c).join(""),r,o,!0).map(l=>l==null||Array.isArray(l)?null:l?.noteNumber).filter(l=>l!=null);e.push({noteNumber:f,volume:o,duration:r}),a=c}continue}}}return e},b={"[":"]","{":"}"},u=(p,n,x)=>{let r=0;for(let o=x;o<n.length;o++)if(n[o]==p&&r++,n[o]==b[p]&&(r--,r<=0))return o;return-1};var O=p=>async n=>{let x=n.map(async s=>fetch(s).then(e=>e.arrayBuffer()).then(async e=>await p.decodeAudioData(e))),r=await Promise.allSettled(x).then(s=>s.map(e=>e.status==="fulfilled"?e.value:null));return{play:s=>{let{noteNumber:e,startTime:h,duration:a,volume:i}=s,E=s.adsr??{attack:0,decay:0,sustain:1,release:0},c=F(p)(h,i,a,E),f=p.createBufferSource();if(f.buffer=r[e],f.buffer!=null){let l=f.buffer.duration;c.connect(p.destination),f.connect(c),f.start(h),f.stop(h+l+E.release/1e3)}}}};var j=(p,...n)=>{let x=new Set(n.flat().flat()),r=[];return x.forEach(o=>{r.push(p+o)}),r};function*U(p=88675123){let n=123456789,x=362436069,r=521288629,o=p;for(;;){let s=n^n<<11;n=x,x=r,r=o,o=o^o>>>19^(s^s>>>8),yield(o+2147483647)/4294967296}}var W=p=>(n=0,x=9)=>Math.floor(p.next().value*(x+1-n))+n;var N=V;
