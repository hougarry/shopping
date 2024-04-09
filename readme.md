
nitialize a new Vue.js project:
First, make sure you have Vue CLI installed. If not, you can install it globally by running:

bash
Copy code
npm install -g @vue/cli
Then, create a new Vue.js project by running:

lua
Copy code
vue create shopping
Follow the prompts to select features and configure your project.
Once the project is created, navigate to the project directory:
cd shopping
Then, start the development server:
npm run serve
The development server will start at http://localhost:8080/.

Then you can open the project in your browser and see the default Vue.js home page. use Ctrl + C to stop the server.

Now, let's install dependencies for the project. Run the following command:
npm install axios // this is for making HTTP requests
npm install vue-router // this is for routing
npm install vuex // this is for state management
npm install element-plus --save// this is for UI components
npm install vue3-markdown // this is for rendering markdown


element plus: https://stackoverflow.com/questions/71644855/how-to-add-element-ui-to-vue-3

add vue components:


add rules to package.json to disable some rules:
find 'eslintConfig' and add the following rules:
    "rules": {
      "vue/multi-word-component-names": "off", 
      "vue/no-deprecated-slot-attribute": "off" 
    }
