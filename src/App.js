import './App.css';

function App() {
  return (
    
    <div class="bg-zinc-900 flex flex-col">
    <div id="hero" class="container-fluid mb-2 p-0 mx-0 flex flex-col">
        <div class="bg-image  bg-[url('img-netflix.jpg')] bg-cover relative top-0 bottom-0 h-screen ">
        <div class="container h-screen bg-gradient-to-b from-black via-transparent to-black ">
            <div class="container flex mx-auto px-40 pt-6 grid grid-cols-12">
                <div class="text-red-600 col-span-4 text-2xl">
                    <span>Netflix</span>
                </div>
                <div class="col-span-8 justify-self-end">
                    <button class="text-white bg-red-600 px-3 py-1 rounded">Sign In</button>
                </div>
            </div>
            <div class="text-white mt-52 flex flex-col">
                <div class="m-auto flex flex-col font-sans">
                    <span class="mb-4 text-5xl font-black">Unlimited movies, TV </span>
                    <span class="mb-4 text-5xl font-black m-auto">shows, and more</span>
                    <span class="m-auto text-xl font-medium mb-8">Starts at Rs 250. Cancel anytime.</span>
                    <span class="m-auto text-base font-normal leading-normal">Ready to watch? Enter your email to create or restart your
                        membership.</span>
                </div>
                <div class="mx-auto mt-4 grid grid-cols-12">
                    <input
                        class="col-span-8 bg-cyan-800/40 caret-white p-4 border-2 border-gray-600 rounded mr-2"
                        id="input1" type="text" placeholder="Email Address"/>
                    <button type="button" 
                        class="col-span-4 bg-red-600 text-2xl rounded px-6">Get
                        Started </button>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="container mb-2">
        <div class="bg-black text-white">
            <div class="flex flex-row flex-wrap mx-36 py-10">
                <div class="flex flex-col justify-center">
                    <span class="text-5xl font-bold">Enjoy on your TV</span>
                    <span class="text-2xl">Watch on Smart TVs, Playstation, Xbox, Chromecast, <br/>Apple TV, Blu-ray
                        players, and more.</span>
                </div>
                <div class="">
                    <img src="tv.png" alt="tv" width="90%"/>
                </div>
            </div>
        </div>
    </div>

<div class="container mb-2">
    <div class="bg-black text-white ">
        <div class="flex flex-row flex-wrap mx-36 py-10">
            <div class="flex justify-end">
                <img src="mobile-0819.jpg" alt="mobile" width="80%"/>
            </div>
            <div class="flex flex-col justify-center">
                <span class="text-5xl font-bold">Download your shows <br/>to watch offline</span>
                <span class="text-2xl">Save your favourites easily and always have <br/>something to watch.</span>
            </div>
        </div>
    </div>
    </div>

    <div class="container mb-2 text-white bg-black">
        <div id="mobile" class="ml-72 py-14 flex flex-col">
            <span class="text-5xl font-bold">Watch <br/>everywhere</span>
            <span class="text-2xl">Stream unlimited movies and TV <br/>shows on your phone, tablet, laptop, <br/>and
                TV.</span>
        </div>
    </div>
    
    <div class="container mb-2">
    <div class="bg-black text-white ">
        <div class="flex flex-row flex-wrap mx-36 py-10">
            <div class="flex justify-end">
                <img src="kids.png" alt="kids" width="80%"/>
            </div>
            <div class="flex flex-col justify-center">
                <span class="text-5xl font-bold">Create profiles for kids</span>
                <span class="text-2xl">Send kids on adventures with their favorite <br/>characters in a space made
                    just for them—free <br/>with your membership.</span>
            </div>
        </div>
    </div>
    </div>
    
    <div class="container bg-black">
        <h1 class="text-white font-bold text-5xl py-4 text-center">Frequently Asked Questions</h1>
    <div id="accordion-collapse" data-accordion="collapse">
<h2 id="accordion-collapse-heading-1">
<button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
  <span>What is Netflix?</span>
  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
  </svg>
</button>
</h2>
<div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
  <p class="mb-2 text-gray-500 dark:text-gray-400">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
  <p class="text-gray-500 dark:text-gray-400"> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
</div>
</div>
<h2 id="accordion-collapse-heading-2">
<button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
  <span>How much does Netflix Cost?</span>
  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
  </svg>
</button>
</h2>
<div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
  <p class="mb-2 text-gray-500 dark:text-gray-400">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 1,100 to Rs 250 a month. No extra costs, no contracts.</p>
</div>
</div>
<h2 id="accordion-collapse-heading-3">
<button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
  <span>Where can I watch?</span>
  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
  </svg>
</button>
</h2>
<div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
<p class="mb-2 text-gray-500 dark:text-gray-400">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
<p class="mb-2 text-gray-500 dark:text-gray-400">You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
</div>
</div>
</div>


        <div class=" text-white mx-auto mt-3 mb-2">
            <div class="text-center"><span class="m-auto text-base font-normal leading-normal">Ready to watch? Enter your email to create or restart your
                membership.</span>
            </div>
            <div class="mx-auto mt-4 grid grid-cols-12">
                <input
                    class="col-span-8 bg-cyan-800/40 caret-white p-4 border-2 border-gray-600 rounded mr-2"
                    id="input1" type="text" placeholder="Email Address"/>
                <button type="button" 
                    class="col-span-4 bg-red-600 text-2xl rounded px-6">Get
                    Started</button>
            </div>
        </div>
    

    <div class="bg-black text-gray-500">
        <div class="flex flex-col flex-wrap px-20 py-20">
            <div><a href="#"
                    class="underline">Questions?Contact
                    us.</a></div>
            <div class="flex  underline ">
                <div class="grid grid-cols-12">
                    <div class="col-span-6 mr-40">
                        <a href="#" class="">FAQ</a><br/>
                        <a href="#" class="">Investor Relation</a><br/>
                        <a href="#" class="">Privacy</a><br/>
                        <a href="#" class="">Speed Test</a>
                    </div>
                    <div class="col-span-6">
                        <a href="#" class="">Help Center</a><br/>
                        <a href="#" class="">Jobs</a><br/>
                        <a href="#" class="">Cookie Preferences</a><br/>
                        <a href="#" class="">Legal Notices</a>
                    </div>
                </div>
                <div class="grid grid-cols-12">
                    <div class="col-span-6 mr-40">
                        <a href="#" class="">Account</a><br/>
                        <a href="#" class="">Ways To Watch</a><br/>
                        <a href="#" class="">Corporate Information</a><br/>
                        <a href="#" class="">Only on Netflix</a>
                    </div>
                    <div class="col-span-6">
                        <a href="#" class="">Media Center</a><br/>
                        <a href="#" class="">Terms of Use</a><br/>
                        <a href="#" class="">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="">
                <select class="my-4 px-2 bg-gray-900 border border-gray-700 rounded text-white">
                    <option value="">English</option>
                </select><br/>
                <span>Netflix Pakistan</span>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
