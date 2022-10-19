import sys
import datetime

class Transaction:
    def __init__(self, credit = None, debit = None, balance = None):
        self.date = datetime.datetime.now()
        self.date_format = self.date.strftime("%d/%m/%Y ")
        self.credit = credit
        self.debit = debit
        self.balance = balance

    def display(self):
        separator = "|| "
        items = [
            self.date_format,
            self.__render(self.credit),
            self.__render(self.debit),
            self.__render(self.balance)
        ]
        return separator.join(items)

    def __render(self, item):
        if item is not None:
            template = "{} "
            return template.format(item)
        return ""


class Printer:
    statement_header = "Date || Amount || Balance \n"

    def print_statement(self, transactions):
        separator = "\n"
        joined_rows = separator.join(transactions)
        print(self.statement_header + joined_rows)


class Account:
    starting_balance = 0
    
    def __init__(self, transaction_class = Transaction, printer_class = Printer):
        self.balance = self.starting_balance
        self.Transaction_Class = transaction_class
        self.Transaction_History = []
        self.Printer = printer_class()
        print("Welcome to ABC Bank!")

#   def deposit(self):
        amount = float(input("Please enter the amount to deposit:"))
        self.balance += amount
        self.__add_transaction(credit=amount, balance=self.balance)
        message = "Thank you, ${0} has been deposited to your account. Current balance: ${1}"
        return message.format(amount, self.balance)

      
    def withdraw(self):
        amount = float(input("Please enter the amount to withdraw:"))
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        self.__add_transaction(debit=amount, balance=self.balance)
        message = "Thank you. ${0} has been withdrawn. Current balance: ${1}"
        return message.format(amount, self.balance)
            
               

    def statement(self):
        reverse_transactions = self.__reverse_transactions()
        mapped_rows = map(self.__transaction_mapping, reverse_transactions)
        self.Printer.print_statement(mapped_rows)

    def __add_transaction(self, credit=None, debit=None, balance=None):
        transaction = self.Transaction_Class(credit, debit, balance)
        self.Transaction_History.append(transaction)

    def __reverse_transactions(self):
        reverse_transactions = self.Transaction_History.copy()
        reverse_transactions.reverse()
        return reverse_transactions

    def __transaction_mapping(self, transaction):
        return transaction.display()
    

# =============== ACCEPT USER INPUT - D, P, W, or Q ============'''


while(True):
    userchoice = input ("Welcome to ABC Bank! Is there anything you like us to do? \n[D]eposit? \n[W]ithdrawal? \n[P]rint Statement? \n[Q]uit?\n").upper()                    
    b = Account(userchoice)  

    if userchoice == 'q' or userchoice == 'Q':
        sys.exit() 

    #do the transaction
    if userchoice == 'd' or userchoice == 'D':
        print(b.deposit())
    elif userchoice == 'w' or userchoice == 'W':
        print(b.withdraw())          
            
       


        
            
            
       

    
    
