const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newdriver = Object.assign({}, driver, 'name')
  return delete newdriver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
 return delete driver[key];
}
