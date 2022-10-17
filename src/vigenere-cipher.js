const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(message, key) {
    if(message == undefined || key == undefined){
      throw new Error("Incorrect arguments!")
    }

    let encryptMessage = '';
    let indexLetterKey = -1;
    message = message.toLowerCase();
    key = key.toLowerCase();
    for(let i = 0; i < message.length; i++) {
      if(message.codePointAt(i) < 97 || message.codePointAt(i) > 122) {
        encryptMessage +=message[i];
        continue;
      }
      indexLetterKey++;
      let codeEncryptLetter = ((message.codePointAt(i) - 97) + (key.codePointAt(indexLetterKey % key.length) - 97)) % 26 + 97;
      encryptMessage += String.fromCodePoint(codeEncryptLetter);
    }

    if(this.modification == false) {
      return encryptMessage.toUpperCase().split('').reverse().join('');
    }

    return encryptMessage.toUpperCase();
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(encryptMessage, key) {
    if(encryptMessage == undefined || key == undefined){
      throw new Error("Incorrect arguments!")
    }

    let decryptMessage = '';
    let indexLetterKey = -1;
    encryptMessage = encryptMessage.toLowerCase();
    key = key.toLowerCase();
    for(let i = 0; i < encryptMessage.length; i++) {
      if(encryptMessage.codePointAt(i) < 97 || encryptMessage.codePointAt(i) > 122) {
        decryptMessage +=encryptMessage[i];
        continue;
      }
      indexLetterKey++;
      let codeLetterInAlphabet = (((encryptMessage.codePointAt(i) - 97) - (key.codePointAt(indexLetterKey % key.length) - 97)) % 26);
      if(codeLetterInAlphabet < 0) {
        codeLetterInAlphabet += 26;
      }
      let codeDecryptLetter = codeLetterInAlphabet + 97;
      decryptMessage += String.fromCodePoint(codeDecryptLetter);
    }
    if(this.modification == false) {
      return decryptMessage.toUpperCase().split('').reverse().join('');
    }
    return decryptMessage.toUpperCase();
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

// const directMachine = new VigenereCipheringMachine();
// directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')

module.exports = {
  VigenereCipheringMachine
};
