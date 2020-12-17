<template>
  <div class="form_container">
    <FormHeader title='Form' text='input fields'/>
    <div class="form_inputs_container">
        <FormInputs />        
    </div>
  </div>
</template>

<script>
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
export default {
  name: "FormContainer",
  components: {
    FormHeader,
    FormInputs,
  },
};
</script>

<style scoped>
.form_inputs_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eeeeee;
}
</style>