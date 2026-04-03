// Module: q$2
// Params: SF,$$2

var CK = N$2();
SF = $$2.exports = {};
SF.program = new CK.Command();
SF.Argument = CK.Argument;
SF.Command = CK.Command;
SF.CommanderError = CK.CommanderError;
SF.Help = CK.Help;
SF.InvalidArgumentError = CK.InvalidArgumentError;
SF.InvalidOptionArgumentError = CK.InvalidArgumentError;
SF.Option = CK.Option;
SF.createCommand = (A) => new CK.Command(A);
SF.createOption = (A, B) => new CK.Option(A, B);
SF.createArgument = (A, B) => new CK.Argument(A, B);
