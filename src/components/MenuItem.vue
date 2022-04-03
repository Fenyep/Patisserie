<script>
import BaseButton from "./BaseButton.vue"
import { mapActions } from 'vuex'

export default {
    name: 'MenuItem',
	components: {
		BaseButton
	},
    props: {
		
		image: {
			type: Object,
			default: () => {}
		},
		inStock: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		quantity: {
			type: Number,
			required: true
		}

	},
	methods: {

		...mapActions(['updateShoppingCart'])

	},
	data() {
			return {
				onSale: false
			}
		},
		computed: {
			generatedPrice() {
				if (this.onSale) {
					return (this.price * 0.9).toFixed(2)
				} else {
					return this.price
				}
			}
		},
		beforeMount() {
			const today = new Date().getDate()
			if (today % 2 === 0) {
				this.onSale = true
			}
		}
}
</script>

<template>
    
				<div  :key="name" class="menu-item">
					<img
						class="menu-item__image"
						:src="image.source"
						:alt="image.alt"
					/>
					<div>
						<h3>{{ name }}</h3>
						<p>{{ generatedPrice }}</p>
						<p v-if="inStock">En stock</p>
						<p v-else>En rupture de stock</p>
						<div>
							<label for="add-item-quantity"
								>Quantité : {{ quantity }}</label
							>
							<input
								v-model.number="quantity"
								id="add-item-quantity"
								type="number"
							/>
							<BaseButton @click="updateShoppingCart(quantity)" class="test">
								Ajouter au panier
							</BaseButton>
						</div>
					</div>
				</div>
</template>

<style>

.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}

</style>