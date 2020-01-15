<template>
    <div id="app">
      <ul>
         <li
           v-for="good in goods"
           :key="good.name"
         >
           <good :good="good"></good>
         </li>
          <div>
             <p>添加商品</p>
             <div>
                <span>名称</span>
                <input type="text" v-model="goodName"/>
             </div>
             <div>
                <span>价格</span>
                <input type="number" v-model="goodPrice"/>
             </div>
             <div>
                <span>描述</span>
                <input type="text" v-model="goodDes"/>
             </div>
              <button @click="addGood">添加</button>
          </div>
      </ul>   
    </div>
</template>
<script>
  import good from './components/good.vue'
  export default {
    components: {
      good
    },
    data () { 
      return {
        goodName: '',
        goodPrice: '',
        goodDes: '',
        // goods: [
        //   {
        //     name: '草莓',
        //     price: '$1',
        //     des: '草莓（学名：Fragaria × ananassa Duch.），多年生草本植物。'
        //   },
        //   {
        //     name: '西瓜',
        //     price: '$9',
        //     des: '西瓜（学名：Citrullus lanatus (Thunb.) Matsum. et Nakai）'
        //   }      
        // ]
      }
    },
    async created () {
      try {
        console.log('fetch start')
        await this.$store.dispatch('fetchGoods')
        console.log('fetch end ')
      } catch(e) {
        console.log(e)
      }
    },
     beforeMount() {
      // console.log('beforeMount-------');
      // let item = {
      //   name: '桃子',
      //   price: '$0.5',
      //   des: '桃花（学名：Amygdalus persica L.）：蔷薇科、桃属植物。落叶小乔木；叶为窄椭圆形至披针形，长15厘米，宽4厘米，先端成长而细的尖端，边缘有细齿，暗绿色有光泽，叶基具有蜜腺；树皮暗灰色，随年龄增长出现裂缝；花单生，从淡至深粉红或红色，有时为白色，有短柄，直径4厘米，早春开花'
      // }
      // this.goods.push(item);
    },
    mounted () {
      console.log('mounted---')
    },
    methods: {
      addGood () {
        let good = {
          name: this.goodName,
          price: `${this.goodPrice}`,
          des: this.goodDes
        }
        this.goods.push(good);
      }
    },
    computed: {
      goods () {
        if (this.$store.state.goods) {
          return this.$store.state.goods
        }
        return [];
      }
    },
  };
</script>
<style>
  span {
    display: inline-block;
    width: 50px;
  }
  input {
    margin-left: 10px;
  }
</style>