Sat May 20 19:40:32 CDT 2017
----------------------------
metronome + countdown timer
believe it or not, this is useful for medical testing

At this point we have a skeleton that counts down a timer.
To run it, just open timer.html in your browser.

TODO: how to make a sound?

metronome icon 
https://cdn.dribbble.com/users/1260364/screenshots/2820108/metro_gnome-01.jpg

interactive javascript and some ideas about "canvas" for drawing pictures
https://www.codecademy.com/courses/web-beginner-en-SWM11/0/1

countdown timer in js
http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

getElementById vs querySelector
https://jsperf.com/getelementbyid-vs-queryselector

Sun May 21 08:30:00 CDT 2017
----------------------------
Went looking for a way to make sounds in JS.
Found http://www.createjs.com/soundjs, which resulted in sound.html in the
local directory here.  While the examples all seem to work on their website, 
I get an error when I try to run it in any of my browsers.  In the JS console
I am seeing an error "[Error] Failed to load resource: The requested URL 
was not found on this server. (WebAudioPluginTest.fail, line 0)"

Keep trying, I guess.

I installed sound[2].html on DCF but even being on a webserver didn't help.
Added makefile to ease push of updates to webserver.

TODO: when timer counts down to zero, we need it to stop and possibly alert
the user (different sound?  foghorn, maybe?)

