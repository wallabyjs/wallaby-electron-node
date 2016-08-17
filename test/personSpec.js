describe('Person', () => {
  it('should report name', () => {
    expect(new Person('John').name).to.equal('John');
  });
});


describe('Node', () => {
  it('should have node support', () => {
    expect(require('http')).to.not.be.undefined;
  });
});
