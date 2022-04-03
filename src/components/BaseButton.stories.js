import BaseButton from "./BaseButton.vue";

export default {
    title: 'BaseButton',
    component: BaseButton,
};

const Template = (args, { argTypes }) => ({
    components: { BaseButton },
    props: Object.keys(argTypes),
    template: '<BaseButton v-bind="props">',
});

export const FirstStorty = Template.bind({});

FirstStorty.args = {
     /* 👇 The args you need here will depend on your component */
};