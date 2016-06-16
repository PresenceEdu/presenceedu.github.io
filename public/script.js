'use strict';

Vue.component('price-component', {
    template: '\n    <div class="row price-component">\n        <div class="col-md-6 text-md-center price-slide">\n            <input type="number" class="form-control form-control-lg" v-model="students" step="100" min="100" max="2000">\n        </div>\n        <div class="col-md-6 text-md-center price-text">\n            <p class="display-4">{{students * 2}} € / mois</p>\n        </div>\n    </div>',
    data: function data() {
        return {
            students: 500
        };
    }
});

new Vue({
    el: 'body'
});
