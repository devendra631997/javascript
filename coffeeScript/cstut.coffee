name = "devendra"
csOutput = document.getElementById("csoutput")
csOutput.innerHTML = "Hello #{name}<br>"+'<br>'

aString = "i am a string"
csOutput.insertAdjacentHTML('beforeend',
'a string is a string<br>'+'<br>') if typeof aString is 'string'

largestNum = Number.MAX_VALUE
smallestNum = Number.MIN_VALUE

largeNumStr = "The largest number is #{largestNum}"
smallNumStr = "The largest number is #{smallestNum}"
csOutput.insertAdjacentHTML('beforeend',
  largeNumStr + '<br>'+'<br>')
csOutput.insertAdjacentHTML('beforeend',
  smallNumStr + '<br>'+'<br>')

areYouHappy = no
csOutput.insertAdjacentHTML('beforeend',
  'are you happy is aboolean<br>'+'<br>') if typeof areYouHappy is 'boolean'

csOutput.insertAdjacentHTML('beforeend',
  "5+2 = #{5+2}<br>"+'<br>')
csOutput.insertAdjacentHTML('beforeend',
  '5+2 = #{5+2}<br>'+'<br>')

precisionTest = 0.1000000000000011;
csOutput.insertAdjacentHTML('beforeend',
  "precision : #{precisionTest+0.11000000000000111}<br>"+'<br>')


balance = 1563.87;
csOutput.insertAdjacentHTML('beforeend',
  "monthly payment = #{(balance/12).toFixed(2)}<br>"+'<br>')

randNum = 5
csOutput.insertAdjacentHTML('beforeend',
  "rand= #{5+2}<br>")