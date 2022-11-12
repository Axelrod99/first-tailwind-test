import './App.css';
import Avatar from './assets/images/avatar.png'
import bell from './assets/images/bell.png'
import booktest from './assets/images/booktest.png'
import tracking from './assets/images/tracking.png'
import result from './assets/images/result.png'
import settings from './assets/images/settings.png'
import logout from './assets/images/logout.png'
import tick from './assets/images/tick.png'
import { Input } from 'postcss';


function App() {
  return (
    <div className="App">
      <header className='h-14 bg-white flex justify-between items-center'>
        <h3 className='text-xl font-bold w-16 ml-5'>
          <span className='text-blue-600'>Kwik</span>med
        </h3>

        <div className='flex items-center mr-6 space-x-2'>
          <div className='flex'>
            <div><img src={bell} className='w-6 h-6'/></div>
            <div className='w-3.5 h-3.5 -ml-2 -mt-0.5 rounded-full bg-red-500 text-white text-center text-[10px]'>6</div>
          </div>
          <img src={Avatar} className='w-7 h-7'/>
          
        </div>
      </header>

      <main className='flex gap-5'>
        <aside className='flex-column bg-white hidden sm:flex my-5 ml-5 w-1/5 h-100% justify-center'>
          <ul> 
            {/* first */}
            <li className='flex mt-14'><img src={tick} className='w-4 h-4 mt-1 mr-1 bg-blue-100'/>
            <a href='/Dashboard'><span>Dashboard</span> </a>
            </li>
            {/* second */}
            <li className='flex mt-6'><img src={booktest} className='w-4 h-4 mt-1 mr-1'/>
            <a href='test'>Book a test</a>
            </li>
            {/* third */}
            <li className='flex mt-6'><img src={tracking} className='w-4 h-4 mt-1 mr-1'/>
            <a href='sample'>Sample tracking</a>
            </li>
            {/* fourth */}
            <li className='flex mt-6'><img src={result} className='w-4 h-4 mt-1 mr-1'/>
              <a href='tracking'>Results</a>
            </li>
            {/* fifth */}
            <li className='flex mt-6'><img src={settings} className='w-4 h-4 mt-1 mr-1'/>
              <a href='settings'>Settings</a>
            </li>
            {/* last */}
            <li className='flex mt-16'><img src={logout} className='w-4 h-4 mt-1 mr-1'/>
              <a href='logout'>Logout</a>
            </li>
          </ul> 
        </aside>


        <main className='flex flex-col items-start h-100% p-10 bg-white my-5 mr-5 w-9/12'>
          <h3>Book a test</h3>
          
          <div className='flex flex-col items-start space-y-2 mt-2'>
            <label>Title</label>
            <input className='bg-slate-200 h-9 rounded-lg'/>
          </div>

          <div className='flex items-start mt-4 w-full'>
            <div className='flex flex-col items-start w-full'>
              <label>First name</label>
              <input className='bg-slate-200 h-9 rounded-lg w-full'/>
            </div>

            <div className='flex flex-col space-x-5 items-start w-full'>
              <label className='ml-4'>Last name</label>
              <input className='bg-slate-200 h-9 rounded-lg w-full'/>
            </div>
          </div>

          <div className='flex flex-row items-start mt-4 w-full'>
            <div className='flex flex-col items-start w-full'>
              <label>Sex</label>
              <input className='bg-slate-200 h-9 rounded-lg w-full'/>
            </div>


            <div className='flex flex-col space-x-5 items-start w-full'>
              <label className='ml-4'>D.O.B</label>
              <input className='bg-slate-200 h-9 rounded-lg w-full'/>
            </div>
          </div>

          <div className='flex flex-col items-start space-y-2 mt-4 w-full'>
            <label>Test of choice</label>
            <input className='bg-slate-200 h-9 rounded-lg w-full'/>
          </div>

          <div className='flex flex-col items-start space-y-2 mt-4 w-full'>
            <label>Means of Result Delivery</label>
            <input className='bg-slate-200 h-9 rounded-lg w-full'/>
          </div>

          <div className='flex flex-col items-start space-y-2 mt-4 w-full'>
            <label>House Address</label>
            <input className='bg-slate-200 h-9 rounded-lg w-full'/>
          </div>

          <div className='flex flex-col items-start space-y-2 mt-4 w-full'>
            <label>Phone number</label>
            <input className='bg-slate-200 h-9 rounded-lg w-full'/>
          </div>

          
        </main>

      </main>
    </div>
  );
}

export default App;
