class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        new_board = self.create_new_board(len(board), len(board[0]))
        # loop through each cell and count live neighbors
        for i, row in enumerate(board):
            for j, cell in enumerate(row):
                neighbors = self.count_live_neighbors(board, i, j)
                if cell == 1:
                    if neighbors == 2 or neighbors == 3:
                        new_board[i][j] = 1
                    else:
                        new_board[i][j] = 0
                elif cell == 0:
                    if neighbors == 3:
                        new_board[i][j] = 1
                    else:
                        new_board[i][j] = 0
        for i, row in enumerate(board):
            for j, cell in enumerate(row):
                board[i][j] = new_board[i][j]

    def create_new_board(self, rows, columns):
        new_board = []
        for i in range(rows):
            new_board.append(["*"] * columns)
        return new_board

    def count_live_neighbors(self, board, row_idx, column_idx):
        neighbors = self.count_hor_neighbors(board, row_idx, column_idx)
        neighbors += self.count_ver_neighbors(board, row_idx, column_idx)
        neighbors += self.count_diag_neighbors(board, row_idx, column_idx)
        # return an int that represents total live neighbors
        return neighbors

    def count_hor_neighbors(self, board, row_idx, column_idx):
        if len(board[0]) > 1:
            if column_idx == 0:
                return board[row_idx][column_idx + 1]
            if column_idx == len(board[row_idx]) - 1:
                return board[row_idx][column_idx - 1]
            return board[row_idx][column_idx + 1] + board[row_idx][column_idx - 1]
        else:
            return 0

    def count_ver_neighbors(self, board, row_idx, column_idx):
        if len(board) > 1:
            if row_idx == 0:
                return board[row_idx + 1][column_idx]
            if row_idx == len(board) - 1:
                return board[row_idx - 1][column_idx]
            return board[row_idx + 1][column_idx] + board[row_idx - 1][column_idx]
        else:
            return 0
    
    def count_diag_neighbors(self, board, row_idx, column_idx):
        if len(board) > 1 and len(board[0]) > 1:
            neighbors = 0
            top_left = True
            top_right = True
            bottom_left = True
            bottom_right = True
            if row_idx == 0:
                top_left = False
                top_right = False
            if row_idx == len(board) - 1:
                bottom_left = False
                bottom_right = False
            if column_idx == 0:
                top_left = False
                bottom_left = False
            if column_idx == len(board[0]) - 1:
                top_right = False
                bottom_right = False

            if top_left:
                neighbors += board[row_idx - 1][column_idx - 1]
            if top_right:
                neighbors += board[row_idx - 1][column_idx + 1]
            if bottom_right:
                neighbors += board[row_idx + 1][column_idx + 1]
            if bottom_left:
                neighbors += board[row_idx + 1][column_idx - 1]
            return neighbors
        else:
            return 0
