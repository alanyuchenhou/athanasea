Feature: rescue

  Scenario: Yuchen rescues a dolphin
    Given Yuchen is in the sea
    And there are dolpins in the sea
    When he rescues a dolphin
    Then a new dolphin should be created in his rescue center