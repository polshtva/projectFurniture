import React  from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders: [],
      items: [
        {
          id: 1,
          title: "Стол 'Санта Фе'",
          img: "santa_fe_table.jpg",
          desc: "Стол с элементами ковки, изготовленный из массива сосны.",
          category: "Столы",
          price: 380
        },
        {
          id: 2,
          title: "Кровать 'Лунный Свет'",
          img: "lunar_light_bed.jpg",
          desc: "Кровать с подсветкой и стеклянной спинкой, создающая атмосферу уюта.",
          category: "Кровати",
          price: 890
        },
        {
          id: 3,
          title: "Диван 'Велюрное Облако'",
          img: "velvet_cloud_sofa.jpg",
          desc: "Мягкий диван с велюровой обивкой, идеальное место для отдыха.",
          category: "Диваны",
          price: 1200
        },
        {
          id: 4,
          title: "Стул 'Милан'",
          img: "milan_chair.jpg",
          desc: "Стул с мягким сиденьем и деревянными ножками, прекрасное дополнение к обеденному столу.",
          category: "Стулья",
          price: 95
        },
        {
          id: 5,
          title: "Шкаф-купе 'Элегант'",
          img: "elegant_wardrobe.jpg",
          desc: "Просторный шкаф-купе с зеркальными дверями и встроенными полками.",
          category: "Шкафы",
          price: 1350
        },
        {
          id: 6,
          title: "Книжная полка 'Библиофил'",
          img: "bibliophile_bookshelf.jpg",
          desc: "Стеллаж для книг и декоративных предметов, выполненный из дуба.",
          category: "Полки",
          price: 290
        },
        {
          id: 7,
          title: "Комод 'Антиквариат'",
          img: "antique_commode.jpg",
          desc: "Комод в стиле антиквариата с резными деталями и мраморной столешницей.",
          category: "Комоды",
          price: 680
        },
        {
          id: 8,
          title: "Кухонный стол 'Солнечный Рассвет'",
          img: "sunrise_kitchen_table.jpg",
          desc: "Кухонный стол с яркими цветами, придающими энергию и радость каждому обеду.",
          category: "Кухонные столы",
          price: 420
        },
        {
          id: 9,
          title: "Кресло 'Классик'",
          img: "classic_armchair.jpg",
          desc: "Кресло в классическом стиле с мягкой обивкой и деревянными подлокотниками.",
          category: "Кресла",
          price: 580
        },
        {
          id: 10,
          title: "Тумба 'Ретро'",
          img: "retro_nightstand.jpg",
          desc: "Ночная тумбочка в ретро стиле с выдвижным ящиком и отделением для книг.",
          category: "Тумбы",
          price: 150
        }
      ]
    }
    this.addToOrdder = this.addToOrdder.bind(this)
  }
  render(){
  return (
    <>
      <div className="wrapper">
        <div className="container">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrdder}/>
        <Footer/>
      </div>
      </div>
    </>
  )
}

  addToOrdder(item){
    let isInArr = false
    this.state.orders.forEach(el => {
      if(el.id === item.id){
        isInArr = true
      }
    })
    if(!isInArr){
      this.setState({orders: [...this.state.orders, item]})
    }

  }
}

export default App
