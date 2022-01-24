describe('Test App', () => {
  it('should do snapshot test', () => {
    const RootDOM = document.querySelector('#root');
    expect(RootDOM).toMatchSnapshot();
  });
});
