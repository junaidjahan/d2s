import DdSelect from "./index.vue";
import { action } from "@storybook/addon-actions";
import { ref, computed } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Atoms/Select",
  component: DdSelect,
  tags: ['autodocs'],
};


export const Default = {
  render: (args) => ({
    components: {
      DdSelect,
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const query = ref("");
      const optionsArr = computed(() =>
        query.value == ""
          ? people.value
          : people.value.filter((item) => {
              return item.name.toLowerCase().includes(query.value.toLowerCase());
            })
      );
  
      const people = ref([
        { value: 1, name: "Leslie Alexander" },
        { value: 2, name: "Aeslie Blexander" },
        { value: 3, name: "Ceslie Dlexander" },
        { value: 4, name: "Eeslie Flexander" },
        { value: 5, name: "Geslie Hlexander" },
        { value: 6, name: "Ieslie Jlexander" },
        { value: 7, name: "Jeslie KJlexander" },
        // More people...
      ]);
      const selected = ref("");
      return {
        selected,
        args,
        optionsArr,
        onClickMethod,
      };
    },
    template: `<ddSelect v-model="selected" :options="optionsArr" :label=args.label :showOnline=args.showOnline :isRequired=args.isRequired :placeholder=args.placeholder :listClass=args.listClass :showAvatar=args.showAvatar :srcLink=args.srcLink :size=args.size :checkIcon=args.checkIcon :addNewItem=args.addNewItem :filterable=args.filterable :disabled=args.disabled /> `,
  }),
  argTypes: {
    placeholder: {
      description: "Change placeholder value as per the requirement",
      type: { name: "string", required: false },
      table: {
        defaultValue: {
          summary: "Search",
        },
      },
    },
    Array: {
      description: `Pass array and filter it sample = [
        { value: 1, name: "Leslie Alexander" },
        { value: 2, name: "Aeslie Blexander" },
        { value: 3, name: "Ceslie Dlexander" },
        { value: 4, name: "Eeslie Flexander" },
        { value: 5, name: "Geslie Hlexander" },
        { value: 6, name: "Ieslie Jlexander" },
        { value: 7, name: "Jeslie KJlexander" },
        // More people...
      ]`,
    },
    options: {
      description: `Pass data array and filter,s const optionsArr = computed(() =>
      query.value == ""
        ? people.value
        : people.value.filter((item) => {
            return item.name.toLowerCase().includes(query.value.toLowerCase());
          })
    );`,
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
  },
};
