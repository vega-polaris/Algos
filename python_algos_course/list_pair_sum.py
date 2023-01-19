# Given an integer list, output all the UNIQUE pairs that sum up to a specific value k.
import unittest

def list_pair_sum (numbers, k):
    # prepare a return list
    pairs = []
    # prepare a memo dict
    memo = {}
    # start looping through the input list
    for number in numbers: 
        # check if number is already in memo. If yes, skip the rest of the loop. If no, add it and continue the loop.
        if number not in memo:
            memo[number] = True
            if k-number in memo and number*2 != k:
                pairs.append((number, k-number))
        elif number*2 == k:
            pairs.append((number, number))

    return pairs    

class ListPairSumTestCase(unittest.TestCase):
    def test_simple_case(self):
        test_list = [1, 3, 2, 2]
        test_k = 4
        expected_pairs = [(1, 3), (2, 2)]
        result_pairs = list_pair_sum(test_list, test_k)
        for i, pair in enumerate(result_pairs):
            self.assertTrue(pair[0] in expected_pairs[i])
        self.assertEqual(len(expected_pairs), len(result_pairs))

    def test_non_unique_case(self):
        test_list = [1, 3, 3, 1, 2, 2]
        expected_pairs = [(1, 3), (2, 2)]
        test_k = 4
        result_pairs = list_pair_sum(test_list, test_k)
        for i, pair in enumerate(result_pairs):
            self.assertTrue(pair[0] in expected_pairs[i])
        self.assertEqual(len(expected_pairs), len(result_pairs))
    
    def test_negative_case(self):
        test_list = [1, -2, 3, 4, -3, -1]
        test_k = 2
        expected_pairs = [(-2, 4), (3, -1)]
        result_pairs = list_pair_sum(test_list, test_k)
        print("expected", expected_pairs)
        print("result", result_pairs)
        for i, pair in enumerate(result_pairs):
            self.assertTrue(pair[0] in expected_pairs[i])
        self.assertEqual(len(expected_pairs), len(result_pairs))

unittest.main()