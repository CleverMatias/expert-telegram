import Home from '@/components/Home';
import Products from '@/components/Products';

export default [
	{
		path: '/',
      	name: 'Home',
      	component: Home,
	},
	{
		path: '/products',
		name: 'Products',
		component: Products,
	}
]