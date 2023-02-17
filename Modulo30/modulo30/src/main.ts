import { createApp } from 'vue'
import App from './App.vue'
import SearchMovie from './SearchMovie.vue'
import AddMovie from './AddMovie.vue'
import About from './About.vue'
import Settings from './Settings.vue'

createApp(App).mount('#app')
createApp(SearchMovie).mount('#search-movie')
createApp(AddMovie).mount('#add-movie')
createApp(About).mount('#about')
createApp(Settings).mount('#sett')

