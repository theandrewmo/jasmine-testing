describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    serverId=0;
    allServers= {}
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should append the server info to the table on updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();

    expect(serverTbody.innerHTML).not.toEqual('')
    expect(serverTbody.children[0].children[0].innerHTML).toEqual('Alice')
  })

  afterEach(function() {
    // teardown logic
    serverNameInput.value = ''
    serverId=0;
    allServers = {}
    updateServerTable();
  });
});
