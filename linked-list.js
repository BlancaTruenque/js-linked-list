function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
  };
}

function createNode(value) {
  let createList = {
    value: value,
    next: null,
  };
  return createList;
}

function append(linkedList, value) {
  let newNodo = createNode(value);
  if (linkedList.head === null) {
    linkedList.head = newNodo;
    linkedList.tail = newNodo;
  } else if (linkedList.head !== null) {
    let objet = linkedList.head;
    while (objet.next !== null) {
      objet = objet.next;
    }
    objet.next = newNodo;
    linkedList.tail = newNodo;
  }
  linkedList.length++;
}

function prepend(linkedList, value) {
  let newNodoPrepend = createNode(value);
  if (linkedList.head === null) {
    linkedList.head = newNodoPrepend;
    linkedList.tail = newNodoPrepend;
  } else {
    newNodoPrepend.next = linkedList.head;
    linkedList.head = newNodoPrepend;
  }
  linkedList.length++;
}

function get(linkedList, index) {
  if (index < 0 || index >= linkedList.length) {
    return null;
  }
  if (index === 0) {
    return linkedList.head;
  }
  console.log(linkedList);
  let acc = linkedList.head;
  for (let i = 0; i < linkedList.length; i++) {
    if (i === index) {
      return acc;
    } else {
      acc = acc.next;
    }
  }
}

function remove(linkedList, index) {
  if (index < 0 || index >= linkedList.length) {
    return null;
  }
  if (index === 0) {
    const a = linkedList.head;
    a = a.next;
  }

  if (index !== 0) {
    let nodoAnterior = get(linkedList, index - 1);
    nodoAnterior.next = get(linkedList, index + 1);

    if (linkedList.length === index - 1) {
      linkedList.tail = nodoAnterior;
    }
    linkedList.length--;
  }
}

function insert(linkedList, index, value) {
  if (index < 0 || index > linkedList.length) {
    return null;
  } else if (index === 0) {
    prepend(linkedList, value);
  } else if (index === linkedList.length) {
    append(linkedList, value);
  } else {
    let nodoAnterior = get(linkedList, index - 1);
    let newNodo = createNode(value);
    newNodo.next = nodoAnterior.next;
    nodoAnterior.next = newNodo;
  }
  linkedList.length++;
}

function clear(linkedList) {
  linkedList.head = null;
  linkedList.tail = null;
  linkedList.length = 0;
}
