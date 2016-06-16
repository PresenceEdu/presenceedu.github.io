Vue.component('price-component', {
    template: `
    <div class="row price-component">
        <div class="col-md-6 text-md-center price-slide">
            <input type="number" class="form-control form-control-lg" v-model="students" step="100" min="100" max="2000">
        </div>
        <div class="col-md-6 text-md-center price-text">
            <p class="display-4">{{students * 2}} € / mois</p>
        </div>
    </div>`,
    data: function() {
        return {
            students: 500
        }
    }
})

new Vue({
    el: 'body'
});