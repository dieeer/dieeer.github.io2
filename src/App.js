import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="bg-gray-50 dark:bg-slate-600 min-h-screen flex items-center justify-center px-8">
  <div class=" w-full max-w-2xl">
    <div class="absolute top-30 -left-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob overflow-hidden object-contain"></div>
    <div class="absolute top-0 -left-4 w-72 h-72 bg-lime-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob overflow-hidden object-contain"></div>
    <div class="absolute top-0 -right-4 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute top-0 middle-1 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute item-center w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute item-center right-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="absolute -bottom-16 right-10 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="relative space-y-4 justify-items-center">
      <div class="p-5 bg-gray-50 dark:bg-slate-800 dark:text-white rounded-lg flex items-center justify-center space-x-8 bg-opacity-70">
      <div class='bg-opacity-100'>
        <p class='text-4xl font-mono'>justin reid</p>
      </div>
      </div>
      <div class="p-5 bg-white  dark:bg-slate-800 dark:text-white rounded-lg bg-opacity-70 ">
      <div class='h-16 grid grid-cols-3 gap-4 align-middle leading-10 '>
          <a href='https://linkedin.com/in/hijustinreid' class="bg-purple-200 hover:bg-indigo-200 text-black dark:bg-slate-600 dark:text-white font-mono py-2 px-2 rounded text-center" action="https://linkedin.com/in/hijustinreid">
      LinkedIn
    </a>
        <a href='https://github.com/dieeer' class="bg-purple-200 dark:bg-slate-600 dark:text-white hover:bg-indigo-200 text-black font-mono py-2 px-2 rounded text-center" action='https://github.com/dieeer'>
          GitHub
        </a>
        <a href='mailto:hi@justinre.id' class="bg-purple-200 dark:bg-slate-600 dark:text-white hover:bg-indigo-200 text-black font-mono py-2 px-2 rounded text-center" >
        Email
        </a>
      </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
