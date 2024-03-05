usernames = []
passwords = []
balances = []


name = input("Enter your name: ")
password = input("Enter your password: ")
confirm = input("Confirm your password: ")


while password != confirm:
    print("Your password doesn't match. Try again.")
    confirm = input("Confirm your password: ")


account_id = len(usernames)


usernames.append(name)
passwords.append(password)
balances.append(0)

print("Account successfully created!")


print("Welcome to the bank system, ", name)


entered_name = input("Enter your username: ")
entered_password = input("Enter your password: ")


if entered_name in usernames and passwords[usernames.index(entered_name)] == entered_password:
    print("Login successful!")

    
    deposit_amount = int(input("Enter your deposit amount: "))
    balances[usernames.index(entered_name)] += deposit_amount
    print("Your deposited amount is:", deposit_amount)

    withdrawal_amount = int(input("Enter your withdrawal amount: "))

    if withdrawal_amount > balances[usernames.index(entered_name)]:
        print(name, ", your entered amount is more than your deposit amount.")
    else:
        balances[usernames.index(entered_name)] -= withdrawal_amount
        print("Congratulations, ", name, "you have successfully completed the withdrawal operation. Now your balance is:", balances[usernames.index(entered_name)])

else:
    print("Invalid username or password. Access denied.")
