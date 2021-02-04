import PropTypes from 'prop-types'

const Project = ({title}) => {
  return (
    <>
    <div id="projectID" class="container-fluid">
      <h3>openAlt - Senior Project</h3>
      [<small>Python</small>]
      [<small>MySQL</small>]
      [<small>JavaScript</small>]
      [<small>Flask</small>]
      [<small>Bootstrap CSS</small>]
      <p>
      • A full stack web app to visualize how and where scientific papers are discussed online.<br/>
      • Designed a database capable of displaying user queries over 50,000 entries, contributing full-stack to frontend and backend.<br/>
      • I was the team lead in our group of four. I had to teach myself new concepts, keep the team on track, and work effectively under pressure.<br/>
      </p>
      [<a class="ghLink" href="https://github.com/tdbowman-CompSci-F2020/openAlt" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>

    <hr/>

    <div id="projectID" class="container-fluid">
      <h3>Building my Home Server</h3>
      [<small>QEMU</small>]
      [<small>VFIO</small>]
      [<small>Linux</small>]
      [<small>Networking</small>]
      <p>
      • I built my own home server running Linux as the host OS. Using QEMU I run a Windows 10 VM and a pfSense VM. I use VFIO to pass the NVME SSD, the second graphics card, and a USB controller through to the Windows VM.<br/>
      • Inside the pfSense VM, I setup pfBlocker to block malicious websites at the router level.<br/>
      • Setup Grafana and Samba for monitoring and file sharing on the host.<br/>
      </p>
      <br/>
    </div>

    <hr/>

    <div id="projectID" class="container-fluid">
      <h3>Adrift - a text adventure</h3>
      [<small>C++</small>]
      <p>
        • A text adventure game inspired by Zork.<br/>
        • My longest side project, I wrote this during my first year of programming.
      </p>
      [<a class="ghLink" href="https://github.com/mitchfen/Adrift" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>

    <hr/>

    <div id="projectID" class="container-fluid">
      <h3>Grafana Dashboard for my pfSense router</h3>
      [<small>Grafana</small>]
      [<small>InfluxDB</small>]
      [<small>Telegraf</small>]
      [<small>pfSense</small>]
      <p>
        • I wanted to learn about networking, so I setup an old Dell Optiplex with pfSense!<br/>
      
        • This allows me to do cool things like setup a DNS black hole and VLANs. The Grafana dashboard is a great way to view all the stats and get started with a homelab. This is also how I learned about networking!
      </p>
      [<a class="ghLink" href="https://github.com/mitchfen/mitchfen_grafana_dash" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>

    <hr/>
    
    <div id="projectID" class="container-fluid">
      <h3>Librebooting my X200</h3>
      [<small>Hardware</small>]
      <p>
        The Intel Management Engine is <a href="https://www.eff.org/deeplinks/2017/05/intels-management-engine-security-hazard-and-users-need-way-disable-it" rel="noopener noreferrer" target="_blank">spooky</a>. Nobody can prove whether it is doing anything nefarious because the code is not open source. I wanted a computer that is 100% FOSS, so I installed <a href="https://libreboot.org/" rel="noopener noreferrer" target="_blank">Libreboot</a> - an open source BIOS implementation. <br/><br/>
        I picked up an old Thinkpad X200 on eBay (a couple actually). I scavanged the good parts from the machines and cobbled together an almost flawless X200. Then, with a lot of Reddit and YouTube tutorials I was able to flash Libreboot to the BIOS chip using a Raspberry Pi. <br/><br/>
        As a bonus, I replaced the TN panel with an IPS panel! See <a href="https://libreboot.org/docs/hardware/x200.html#ipsa" rel="noopener noreferrer" target="_blank">here</a>.
      </p>
    </div>

    <hr/>

    <div id="projectID" class="container-fluid">
      <h3>Windows Setup Script</h3>
      [<small>Powershell</small>]
      <p>
        • I wrote this Powershell script to automate the process of setting up my Windows machines.<br/>
        • It installs the chocolatey package manager, then uses choco commands to install my frequently used programs.
      </p>
      [<a class="projectID" href="https://github.com/mitchfen/Windows_Setup_Script" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>

    <hr/>
    
    <div id="projectID" class="container-fluid">
      <h3>Artist Database Builder</h3>
      [<small>Python</small>]
      [<small>SQLite</small>]
      <p>
        • A GUI program I made with Python and Tkinter.<br />
        • I go to a lot of concerts, and was having trouble keeping track of who I've seen.<br />
        • I wanted a solution that would allow me to use select statements to find all the artists I saw at a given venue, year, etc.
      </p>
      [<a class="ghLink" href="https://github.com/mitchfen/Artist_Database_Builder" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>

    <hr/>
    
    <div id="projectID" class="container-fluid">
      <h3>mp3 + wav renamer</h3>
      [<small>Python</small>]
          <p>
            • Python script I wrote to help organize my mess of a music library. 
            • Each mp3 or wav is read into a list. The songs are played in turn, and you can delete or rename them. <br/>
            • This was a good introduction to Python and got me thinking about what else I can automate.
          </p>
          [<a class="ghLink" href="https://github.com/mitchfen/mp3_wav_Renamer" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>

    <hr/>
    
    <div id="projectID" class="container-fluid">
      <h3>Budget Minimalism</h3>
        [<small>Android</small>]
        [<small>Java</small>]
        <p>
          • Android budgeting app built as part of a software engineering class. <br/>
          • This didn’t turn out as well as I hoped, but it taught me how to use GitHub as part of a team.
        </p>
        [<a class="ghLink" href="https://github.com/WSU-4110/Budget-Minimalism" rel="noopener noreferrer" target="_blank">GitHub repo</a>]
    </div>

    <hr/>

    <div id="projectID" class="container-fluid">
      <h3>Light Sensing App</h3>
      [<small>Android</small>]
      [<small>Java</small>]
        <p>
          • Simple Android app that polls the light sensor on a timer. It also writes sensor data to a text file. The SI unit for illuminance is wacky.
        </p>
        [<a class="ghLink" href="https://github.com/mitchfen/light_sensing_app" rel="noopener noreferrer" target="_blank">GitHub Repo</a>]
    </div>
  </>
  )
}

Project.propTypes = {
  title: 'Project'
}

export default Project
