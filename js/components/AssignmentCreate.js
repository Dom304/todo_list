export default {
    template: `
      <form @submit.prevent="add">
      <div class="border border-grey-600 text-gray-700 flex">
        <input v-model="new_assignments" placeholder="New Assignment ..." class="p-2" required pattern=""/>

          <button type="submit" class="bg-white p-2 border-l ">Add</button>
      </div>
      </form>
      
    `,

    data() {
        return {
            new_assignments: ''
        }
    },

    methods: {
        add(){
            //doesn't do anything just hold information for the parent to use
            this.$emit('add', this.new_assignments);

            this.new_assignments = '';
        }
    }
}
