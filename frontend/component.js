export const navDiv = `
  <div  class="flex bg-neutral-200 p-2 navbar">
  <h1 class="text-xl"><a href="/">Notes App</a></h1>
  <div id="navIn" class="ms-auto"></div>
  </div>
`;

export const createDiv = `
<a id="createDiv" class=" me-4 text-cyan-700 hover:text-cyan-600" href="/pages/create.html">Create</a>
`;
export const logOutDiv = `
<button id="logOutDiv" class=" me-4 text-red-500 hover:text-red-700" >Logout</button>
`;
export const registerDiv = `
<a id="registerDiv" class=" me-4 text-green-600 hover:text-green-500" href="/pages/register.html">Register</a>
`;
export const loginDiv = `
<a id="loginDiv" class=" me-4 text-green-600 hover:text-green-500" href="/pages/login.html">Login</a>
`;

// Pages

export const registerPage = `
    <div class="w-screen h-screen flex flex-col justify-center items-center ">
      <h3 class="pb-5 text-2xl">Register</h3>
      <form id="registerForm" class="rounded-lg p-10 bg-neutral-100">
        <div>
          <label for="register_name" class="ps-2">Name</label>
          <input type=" text" id="register_name" class="bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow  block w-full p-2 " placeholder="John" required />

        </div>
        <div class="py-2">
          <label for="register_email" class="ps-2">Email</label>
          <input type=" email" id="register_email" class="bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow  block w-full p-2 " placeholder="john@gmail.com" required />
        </div>
        <div class="py-2">
          <label for="register_password" class="ps-2">Password</label>
          <input type="password" id="register_password" class="bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow  block w-full p-2 " placeholder="password" required />
        </div>
        <div class="flex py-2">
          <button type="submit" class="mx-auto bg-black p-2 w-24 text-white rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  </div>
`;
export const loginPage = `
<div class="w-screen h-screen flex flex-col justify-center items-center ">
      <h3 class="pb-5 text-2xl">Login</h3>
      <form id="loginForm" class="rounded-lg p-10 bg-neutral-100">
        <div class="py-2">
          <label for="login_email" class="ps-2">Email</label>
          <input type=" email" id="login_email" class="bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow  block w-full p-2 " placeholder="john@gmail.com" required />
        </div>
        <div class="py-2">
          <label for="login_password" class="ps-2">Password</label>
          <input type="password" id="login_password" class="bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow  block w-full p-2 " placeholder="password" required />
        </div>
        <div class="flex py-2">
          <button type="submit" class="mx-auto bg-black p-2 w-24 text-white rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  </div>
`;

export const createPage = `
<div class="w-screen h-screen flex flex-col justify-center items-center ">
      <h3 class="pb-5 text-2xl">Create Note</h3>
      <form id="createNote" class="rounded-lg p-10 bg-neutral-100 w-1/2">
        <div class="py-2">
          <label for="createTitle" class="ps-2">Title</label>
          <input type=" text" id="createTitle" class="bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow  block w-full p-2 " placeholder="Title" required />
        </div>
        <div class="py-2">
          <label for="createContent" class="ps-2">Content</label>
          <textarea id="createContent" rows="10" class="bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow  block w-full p-2 " placeholder="Write something..." required ></textarea>
        </div>
        <div class="flex py-2">
          <button type="submit" class="mx-auto bg-black p-2 w-24 text-white rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  </div>
`;

export const notesPage = `
<div id="notes" class="grid grid-cols-3 gap-3 p-2"></div>
`;
