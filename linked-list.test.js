const assert = chai.assert;

describe("Lista Enlazada", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = createLinkedList();
  });

  describe("createLinkedList()", () => {
    it("debería crear una lista enlazada vacía", () => {
      const list = createLinkedList();
      assert.isNotNull(list);
      assert.isNull(list.head);
    });
  });

  describe("createNode()", () => {
    it("debería crear un nodo con valor y next = null", () => {
      const node = createNode("test");
      assert.isNotNull(node);
      assert.equal(node.value, "test");
      assert.isNull(node.next);
    });
  });

  describe("append()", () => {
    it("debería agregar un nodo al final de la lista", () => {
      append(linkedList, "test");
      assert.equal(linkedList.head.value, "test");
    });

    it("debería agregar múltiples nodos", () => {
      append(linkedList, "first");
      append(linkedList, "second");
      assert.equal(linkedList.head.value, "first");
      assert.equal(linkedList.head.next.value, "second");
    });
  });

  describe("prepend()", () => {
    it("debería agregar un nodo al inicio de la lista", () => {
      prepend(linkedList, "test");
      assert.equal(linkedList.head.value, "test");
    });

    it("debería agregar múltiples nodos al inicio", () => {
      prepend(linkedList, "first");
      prepend(linkedList, "second");
      assert.equal(linkedList.head.value, "second");
      assert.equal(linkedList.head.next.value, "first");
    });
  });

  describe("get()", () => {
    beforeEach(() => {
      append(linkedList, "first");
      append(linkedList, "second");
      append(linkedList, "third");
    });

    it("debería obtener un nodo por su índice", () => {
      const node = get(linkedList, 1);
      assert.equal(node.value, "second");
    });

    it("debería retornar null para índices fuera de rango", () => {
      const node = get(linkedList, 5);
      assert.isNull(node);
    });
  });

  describe("remove()", () => {
    beforeEach(() => {
      append(linkedList, "first");
      append(linkedList, "second");
      append(linkedList, "third");
    });

    it("debería remover un nodo por su índice", () => {
      remove(linkedList, 1);
      assert.equal(linkedList.head.next.value, "third");
    });

    it("debería manejar intentos de remover índices fuera de rango", () => {
      remove(linkedList, 5);
      assert.equal(get(linkedList, 2).value, "third");
    });
  });

  describe("insert()", () => {
    beforeEach(() => {
      append(linkedList, "first");
      append(linkedList, "third");
    });

    it("debería insertar un nodo en un índice específico", () => {
      insert(linkedList, 1, "second");
      assert.equal(get(linkedList, 1).value, "second");
    });

    it("debería insertar un nodo al inicio si el índice es 0", () => {
      insert(linkedList, 0, "zero");
      assert.equal(linkedList.head.value, "zero");
      assert.equal(linkedList.head.next.value, "first");
    });

    it("debería insertar un nodo al final si el índice es igual a la longitud", () => {
      insert(linkedList, 2, "fourth");
      assert.isNull(get(linkedList, 2).next);
      assert.equal(linkedList.tail.value, "fourth");
    });

    it("debería no hacer nada para índices negativos", () => {
      insert(linkedList, -1, "invalid");
      assert.notEqual(linkedList.head.value, "invalid");
    });

    it("debería no hacer nada para índices mayores que la longitud", () => {
      insert(linkedList, 5, "invalid");
      assert.notEqual(linkedList.tail.value, "invalid");
    });
  });

  describe("clear()", () => {
    beforeEach(() => {
      append(linkedList, "first");
      append(linkedList, "second");
      append(linkedList, "third");
    });

    it("debería limpiar la lista enlazada", () => {
      clear(linkedList);
      assert.isNull(linkedList.head);
      assert.isNull(linkedList.tail);
      assert.equal(linkedList.length, 0);
    });
  });
});
