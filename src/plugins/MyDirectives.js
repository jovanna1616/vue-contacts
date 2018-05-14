const MyDirectives = {
    install(Vue, options) {
      Vue.directive('focusOn', {
        // inserted is hook
        inserted: function(element, binding) {
          element.focus()
          // console.log(element, binding)
        }
      })
    }
}

export default MyDirectives