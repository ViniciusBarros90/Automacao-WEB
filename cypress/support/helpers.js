import { faker } from '@faker-js/faker';

export function getRandomNumber() {
    return faker.number.int({ min: 1000, max: 9999 })
}

export function getRandomEmail() {
    return faker.internet.email({ firstName: 'qa-tester' }).toString()
}

export function getSenha() {
    return faker.internet.password({ length: 6 });
}
