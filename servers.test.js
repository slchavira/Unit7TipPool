describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update #serverTable with a TR and data within TD', function () {
    submitServerInfo();
    updateServerTable();

    const createdTD = document.querySelectorAll('#serverTable td');

    expect(createdTD[0].innerText).toEqual('Alice');
    expect(createdTD[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverTbody.innerHTML = ''; //removes table created within updateServerTable()
    //resets serverID count and allServers object
    allServers = {};
    serverId = 0;
  });
});
