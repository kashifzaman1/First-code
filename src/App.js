import './App.css';


function App() {
  return (
    
    <div class="bg-black flex flex-col">
    <div id="hero" class="container-fluid mb-2 p-0 mx-0 flex flex-col">
        <div class="bg-image  bg-[url('img.jpg')] bg-cover relative top-0 bottom-0 h-screen ">
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
    <div class="container mb-2 text-white text-2xl font-bold ml-40 w-fit">
        <span>A Plan To Suit Your Needs</span>
    <div class="flex">
    <div class="max-w-72 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-pink-900 to-black pt-4 pb-6 mt-4 mr-4 cursor-pointer transition duration-300 ease-in-out hover:scale-105">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">PREMIUM</div>
    <p class=" text-xl font-normal">
        A cinematic experience with the best picture and audio quality.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="text-xl">Rs 1,100/month</span>
  </div>
</div>

<div class="max-w-72 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-pink-900 to-black pt-4 pb-6 mt-4 mr-4 cursor-pointer transition duration-300 ease-in-out hover:scale-105">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">STANDARD</div>
    <p class=" text-xl font-normal">
    All the entertainment you love, in Full HD video quality.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="text-xl">Rs 800/month with discount</span>
  </div>
</div>

<div class="max-w-72 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-pink-900 to-black pt-4 pb-6 mt-4 mr-4 cursor-pointer transition duration-300 ease-in-out hover:scale-105">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">BASIC</div>
    <p class=" text-xl font-normal">
    A great way to enjoy all your favorite shows and movies on a budget.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="text-xl">Rs 450/month</span>
  </div>
</div>

<div class="max-w-72 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-pink-900 to-black pt-4 pb-6 mt-4 mr-4 cursor-pointer transition duration-300 ease-in-out hover:scale-105">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">MOBILE</div>
    <p class=" text-xl font-normal">
    A travel friendly option for your mobile device.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="text-xl">Rs 250/month</span>
  </div>
</div>
</div>
    </div>

<div class="container mb-2 text-white ml-40 mt-10 w-fit">
    <span class="text-2xl font-bold">Trending Now</span>
    <br/><select class="my-4 p-2 bg-black border border-gray-700 rounded text-white">
        <option value="">Pakistan</option>
        <option>Global</option>
    </select>
    <select class="my-4 ml-6 p-2 bg-black border border-gray-700 rounded text-white">
        <option value="">Movies</option>
        <option>TV Shows</option>
    </select>
<div class="flex ">
    <div class=" flex cursor-pointer transition duration-300 ease-in-out hover:scale-105">
    <span class="z-10 text-8xl font-bold text-white relative top-36 left-9  h-fit w-fit">1</span>
    <img src='1.webp' class="rounded-lg z-0"/>
    </div>
    <div class=" flex cursor-pointer transition duration-300 ease-in-out hover:scale-105">
    <span class="z-10 text-8xl font-bold text-white relative top-36 left-9 h-fit w-fit">2</span>
    <img src='2.webp' class="rounded-lg z-0"/>
    </div>
    <div class="flex cursor-pointer transition duration-300 ease-in-out hover:scale-105">
    <span class="z-10 text-8xl font-bold text-white relative top-36 left-9 h-fit w-fit">3</span>
    <img src='3.webp' class="rounded-lg z-0"/>
    </div>
    <div class="flex cursor-pointer transition duration-300 ease-in-out hover:scale-105">
    <span class="z-10 text-8xl font-bold text-white relative top-36 left-9 h-fit w-fit">4</span>
    <img src='4.webp' class="rounded-lg z-0"/>
    </div>
    <div class="flex cursor-pointer transition duration-300 ease-in-out hover:scale-105">
    <span class="z-10 text-8xl font-bold text-white relative top-36 left-9 h-fit w-fit">5</span>
    <img src='5.webp' class="rounded-lg z-0"/>
    </div>
    </div>

</div>

    <div class="container ml-40 text-white mt-10">
    <span class="text-2xl font-bold">Get More From Your Membership</span>
    <div class=" mt-4 w-3/4 h-96 bg-gradient-to-r from-pink-900 to-purple-950 rounded-xl flex  overflow-hidden">
        <div class="h-fit w-3/4 py-3.5 pl-10 my-auto">
            <span class="text-3xl font-medium">Mobile games now included in <br/>every plan</span>
            <p>No ads, extra fees, or in-app purchases. Enjoy unlimited access to a growing <br/>catalog of popular and exclusive games.</p>
        </div>
        <div class="relative -right-44 -top-16">
            <img src='games.webp'/>
            </div>
    </div>
    </div>
    
    <div class="container mt-10 text-white ml-40">
    <span class="text-2xl font-bold">More reasons to join</span>
        <div class="flex">
        <div
  class="block rounded-lg p-6 w-72 h-60 mt-4 mr-4 text-surface shadow-secondary-1 bg-gradient-to-br from-blue-950 to-purple-950 dark:bg-surface-dark text-white">
  <h1 class="mb-2 text-3xl font-bold leading-tight">Stories tailored to your taste</h1>
  </div>

  <div
  class="block rounded-lg p-6 w-72 h-60 mt-4 mr-4 text-surface shadow-secondary-1 bg-gradient-to-br from-blue-950 to-purple-950 dark:bg-surface-dark text-white">
  <h1 class="mb-2 text-3xl font-bold leading-tight">Cancel or switch plans anytime</h1>
  </div>

  <div
  class="block rounded-lg p-6 w-72 h-60 mt-4 mr-4 text-surface shadow-secondary-1 bg-gradient-to-br from-blue-950 to-purple-950 dark:bg-surface-dark text-white">
  <h1 class="mb-2 text-3xl font-bold leading-tight">A place just for kids</h1>
  </div>

  <div
  class="block rounded-lg p-6 w-72 h-60 mt-4 mr-4 text-surface shadow-secondary-1 bg-gradient-to-br from-blue-950 to-purple-950 dark:bg-surface-dark text-white">
  <h1 class="mb-2 text-3xl font-bold leading-tight">For your phone, tablet, laptop and TV</h1>
  </div>
        </div>
    </div>
    
    <div class="container bg-black ">
        <h1 class="text-white font-bold text-2xl py-4 ml-40">Frequently Asked Questions</h1>
        <div class="ml-40 w-2/3 text-2xl">
    <div class="divide-y text-white divide-gray-100">
        <details class="group bg-stone-700 mb-2">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-secondary-900 group-open:text-primary-500">
                What is Netflix?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</div>
        </details>
        <details class="group bg-stone-700 mb-2 border-none">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-secondary-900 group-open:text-primary-500">
                How much does Netflix cost?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 1,100 to Rs 250 a month. No extra costs, no contracts.
</div>
        </details>
        <details class="group bg-stone-700 mb-2 border-none">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-secondary-900 group-open:text-primary-500">
                Where can I watch?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
        </details>
       
        <details class="group bg-stone-700 mb-2 border-none">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-secondary-900 group-open:text-primary-500">
                How do I cancel?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
</div>
        </details>

        <details class="group bg-stone-700 mb-2 border-none">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-secondary-900 group-open:text-primary-500">
                What can I watch on Netflix?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.

</div>
        </details>

        <details class="group bg-stone-700 mb-2 border-none">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium text-secondary-900 group-open:text-primary-500">
                Is Netflix good for kids?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.

</div>
        </details>
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
