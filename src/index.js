const EntityBase = require('./EntityBase')

// console.log(new EntityBase({
//   name: "Victor Freitas",
//   gender: "male"
// }).name)

// console.log(new EntityBase({
//   name: "Victor Freitas",
//   age: '23',
//   gender: "male"
// }).birthDay)

const assert = require('assert')
const Enployee = require('./employee')
const Manager = require('./manager')
const Util = require('./util')

const GENDER = {
  male: 'male',
  female: 'female'
}

// Definição de contexto
{
  const  enployee = new Enployee({
    name: 'Xuxalino',
    gender: GENDER.male,
  })

  assert.throws(() => enployee.birthYear, {message: 'You must define age first.'})
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

{
  const  enployee = new Enployee({
    name: 'Jhones',
    gender: GENDER.male,
    age: 20
  })

  assert.deepStrictEqual(enployee.name, 'Mr. Jhones')
  assert.deepStrictEqual(enployee.age, undefined)
  assert.deepStrictEqual(enployee.gender, undefined)
  assert.deepStrictEqual(enployee.grossPay, Util.formatCurrecy(5000.40))
  assert.deepStrictEqual(enployee.netPay, Util.formatCurrecy(4000.32))

  // Se não possui SET, não é possivel alterar o valor!
  const expectBirthYear = 2001
  assert.deepStrictEqual(enployee.birthYear, expectBirthYear)

  enployee.age = 80
  assert.deepStrictEqual(enployee.birthYear, 1941)
}

{
  const manager = new Manager({
    name: 'Vitoria',
    gender: GENDER.female,
    age: 21
  })

  assert.deepStrictEqual(manager.bonuses, Util.formatCurrecy(2000))
  assert.deepStrictEqual(manager.name, 'Ms. Vitoria')
  assert.deepStrictEqual(manager.birthYear, 2000)
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrecy(5000.40));
  assert.deepStrictEqual(manager.netPay, Util.formatCurrecy(6000.32))
}