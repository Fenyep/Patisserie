<template>
  <div id="app" class="app">
			<h1>{{ restaurantName }}</h1>
			<p class="description">
				Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
				notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
				matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
				est difficile de s'arrêter.
			</p>

      <section class="menu">
				<h2>Menu</h2>
				<MenuItem
          v-for="item in simpleMenu"
          :name="item.name"
          :image="item.image"
          :quantity="item.quantity"
          :inStock="item.inStock"
          :price="item.price"
          :key="item.name"
        />
			</section>

			

			<aside class="shopping-cart">
				<h2>Panier d'achat : {{ shoppingCart }} articles</h2>
			</aside>
			
			<footer class="footer">
				<p>{{ copyright }}</p>
			</footer>
		</div>
</template>

<script>
// @ is an alias to /src
import MenuItem from '@/components/MenuItem.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    MenuItem
},
				computed: {
          ...mapState(['restaurantName', 'shoppingCart', 'simpleMenu']),
					...mapGetters(['copyright'])
				}
}
</script>

<style>

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  text-align: center;
  font-style: italic;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
  
</style>