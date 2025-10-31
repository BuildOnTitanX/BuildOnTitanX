---
id: testingID
title: testingCode
published: true
description: Code
blocks:
  - _block: code
    language: javascript
    code: |
      // Chuck Norris's version of Hello World
      function helloWorld() {
        console.log("Chuck Norris doesn't need functions");
        return "The world says hello to Chuck";
      }
  - _block: code
    language: markdown
    code: >+
      # Example Entry made by Pages CMS


      ---

      id: chuck-norris-2

      title: Chuck Norris Facts Vol. 2

      published: true

      description: More incredible facts about the legendary Chuck Norris

      author: "Chuck Norris"

      blocks:
        - _block: hero
          heading: "Chuck Norris Doesn't Do Pushups"
          subheading: "He pushes the Earth down"
          image: "/posts/post-image-3.png"
        - _block: pageheader
          title: "The Legend Continues"
          subtitle:
            content: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
          bgType: "filled"
        - _block: code
          language: "javascript"
          code: |
            // Chuck Norris's version of Hello World
            function helloWorld() {
              console.log("Chuck Norris doesn't need functions");
              return "The world says hello to Chuck";
            }
        - _block: accordion
          useChevron: false
          allowMultiple: false
          items:
            - title: Fact #4
              content: "Chuck Norris can slam a revolving door."
            - title: Fact #5
              content: "Chuck Norris doesn't wear a watch. He decides what time it is."
            - title: Fact #6
              content: "Chuck Norris can unscramble an egg."
      ---


  - _block: code
    language: vyper
    code: >
      from boa.compile import compile_vyper

      from boa.deploy import deploy_contract

      from boa.contract import Contract

      from hypothesis import given, strategies as st

      import os


      # Compile and deploy the contract locally

      def deploy_local_contract():
          with open("contract.vy", "r") as f:
              contract_code = f.read()
          compiled_contract = compile_vyper(contract_code)

          # Use the default Ganache account private key
          private_key = os.getenv("GANACHE_PRIVATE_KEY")
          contract_address = deploy_contract(compiled_contract, private_key)

          # Load the deployed contract instance
          return Contract(address=contract_address, abi=compiled_contract['abi'])

      # Define a Hypothesis test function

      @given(value=st.integers(min_value=1, max_value=1000))

      def test_contract_function(value):
          contract = deploy_local_contract()

          # Example function call to test
          result = contract.functions.myFunctionName(value).call()
          assert result == expected_result  # Replace with the actual expected result or condition
---
