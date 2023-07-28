export const route = useRoute()

const { links } = useAppConfig()

export const navItems = ref([
  {
    label: 'Dashboard',
    icon: 'mdi-speedometer',
    to: '/'
  },
  {
    label: 'Distribution',
    icon: 'mdi-bank',
    to: '/distribution'
  },
  {
    label: 'My Relays',
    icon: 'mdi-lifebuoy',
    to: '/my-relays'
  },
])

export const currentPageTitle = computed(() => {
    const currentNavItem = navItems.value.find(item => {
      if (item.to && route.name === item.to.substring(1)) {
        return true
      }
      
      if (route.name === 'index' && item.to === '/') {
        return true
      }
  
      return false
    })
    
    return currentNavItem ? currentNavItem.label : ''
})
