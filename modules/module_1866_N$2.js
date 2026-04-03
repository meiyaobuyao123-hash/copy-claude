// Module: N$2
// Params: p75

var { Argument: w$2 } = DH1(),
  { Command: Ge1 } = z$2(),
  { CommanderError: d75, InvalidArgumentError: E$2 } = se(),
  { Help: u75 } = tt1(),
  { Option: U$2 } = et1();
p75.program = new Ge1();
p75.createCommand = (A) => new Ge1(A);
p75.createOption = (A, B) => new U$2(A, B);
p75.createArgument = (A, B) => new w$2(A, B);
p75.Command = Ge1;
p75.Option = U$2;
p75.Argument = w$2;
p75.Help = u75;
p75.CommanderError = d75;
p75.InvalidArgumentError = E$2;
p75.InvalidOptionArgumentError = E$2;
