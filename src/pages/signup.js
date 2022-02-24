import Footer from '../component/footer';
import Header from '../component/header';
import { signup } from '../api/user';

const SignUp = {
  print() {
    return /* html */ `${Header.print()}
 <div class="h-screen bg-gray-100 flex justify-center">
   <div class="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
     <form action="" class="w-80" id="formSignup">
       <div class="mb-6">
         <label for="email" class="block text-gray-800 font-bold">Email:</label>
         <input type="text" name="email" id="email" placeholder="@Email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
       </div>

       <div>
         <label for="password" class="block text-gray-800 font-bold">Password:</label>
         <input type="password" name="password" id="password" placeholder="Password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

       </div>
       <button type="submit" class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Sign up</button>
     </form>
   </div>
 </div>
 ${Footer.print()}`;
  },

  afterPrint() {
    const formSignup = document.querySelector('#formSignup');
    formSignup.addEventListener('submit', (e) => {
      e.preventDefault();
      signup({
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
      });
    });
  },
};

export default SignUp;
