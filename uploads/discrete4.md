# University Discrete Mathematics: Final Exam Comprehensive Review Report

## 1. Predicate Logic and Quantifiers

Predicate Logic serves as the foundational language for mathematical proofs and software verification, providing a rigorous framework for expressing complex logical relationships across domains. Unlike propositional logic, which deals with fixed truth values, predicate logic allows us to describe properties that apply to variables within a set. Mastering quantifiers is essential for moving beyond simple statements to expressing properties across entire sets, enabling the formalization of mathematical definitions like limits and the verification of computational logic.

### Core Theory & Key Laws

A **Predicate** is a statement containing a variable that becomes a proposition (a statement with a fixed truth value) once that variable is assigned a value from a domain of discourse.

*   **Universal Quantifier (\forall):** States that a property holds for all elements in a domain. `\forall x P(x)` is true if `P(x)` is true for every `x`. An element that makes `P(x)` false is a **counterexample**.
*   **Existential Quantifier (\exists):** States that a property holds for at least one element in a domain.
*   **Precedence Rule:** Quantifiers have higher precedence than all logical operators (`\wedge, \vee, \rightarrow, \neg`).
    *   *Architect Tip:* This means a quantifier’s scope ends at the first operator it encounters unless parentheses are used. For example, `\forall x P(x) \vee Q(x)` is strictly `(\forall x P(x)) \vee Q(x)`.
*   **Negation Laws:**
    *   `\neg \forall x P(x) \equiv \exists x \neg P(x)`
    *   `\neg \exists x P(x) \equiv \forall x \neg P(x)`

### Nested Logic and Variable Binding

Nested quantifiers occur when one quantifier appears within the scope of another. The order is critical; for the domain of real numbers:

*   `\forall x \exists y (x + y = 0)` is **true** (every number has an additive inverse).
*   `\exists y \forall x (x + y = 0)` is **false** (no single number `y` acts as the inverse for every `x`).

Variables are **Bound** when acted upon by a quantifier; otherwise, they are **Free**. The **Scope** is the specific portion of the expression the quantifier controls.

### Exam Preparation

*   **Typical Tasks:** Translating English sentences into logic (e.g., the "successor" problem: `\forall n \in \mathbb{Z}^+, \exists m \in \mathbb{Z}^+ (m = n + 1)`) and identifying counterexamples.
*   **Common Mistakes:** Forgetting that the truth value of a quantified statement depends entirely on the domain of discourse.

### Practice & Summary

1.  **Translate:** "For every `\epsilon > 0`, there exists `\delta > 0` such that `|x - c| < \delta \rightarrow |f(x) - L| < \epsilon`."
2.  **Negate:** `\forall x \in \mathbb{N}, \exists y \in \mathbb{N} (x < y)`.
3.  **English:** `\exists x \in \mathbb{R}, \forall y \in \mathbb{R} (x \le y)`.

### Mini Cheat-Sheet

| Quantifier        | Meaning      | True When...                       | False When...                    |
| :---------------- | :----------- | :--------------------------------- | :------------------------------- |
| Universal (`\forall`) | For all      | `P(x)` is true for every `x`       | There is a counterexample        |
| Existential (`\exists`) | There exists | `P(x)` is true for some `x`        | `P(x)` is false for all `x`      |

These logical structures provide the formal definitions required to analyze the relationships between elements in Sets and Functions.

---

## 2. Sets, Functions, and Cardinality

Functions are the primary mechanism for mapping data between sets. Understanding mapping types—injections and surjections—is critical for determining if a process is reversible or if two infinite sets are of equal size.

### Core Theory & Function Types

A function `f: A \rightarrow B` maps each element in the **Domain** (`A`) to exactly one element in the **Codomain** (`B`). The **Range (Image)** is the set of actual outputs `\{f(a) | a \in A\}`.

*   **Injective (One-to-One):** `f(x_1) = f(x_2) \rightarrow x_1 = x_2`.
*   **Surjective (Onto):** The Range equals the Codomain (`Im(f) = B`).
*   **Bijective:** Both injective and surjective. A Bijection is required for an **Inverse Function** (`f^{-1}`) to exist.
    *   *Architect Tip:* Watch for domain restrictions. For example, `g(x) = x^2` is only invertible if restricted to a domain like `x \ge 0`.

### Mathematical Laws

*   **Composition:** `(g \circ f)(x) = g(f(x))`. Apply `f` first, then `g`.
*   **Floor (\lfloor x \rfloor):** Largest integer `\le x` (e.g., `\lfloor -1.2 \rfloor = -2`).
*   **Ceiling (\lceil x \rceil):** Smallest integer `\ge x` (e.g., `\lceil -1.2 \rceil = -1`).

### Cardinality and Countability

Two sets have the same cardinality if a bijection exists between them.

*   **Countably Infinite:** `\mathbb{N}, \mathbb{Z}, \mathbb{Q}`.
*   **Uncountably Infinite:** `\mathbb{R}`.
*   **Proof Strategy (Rationals):** Positive rationals are countable by listing pairs `(p, q)` in a grid and using diagonal enumeration. *Crucial:* We do not repeat a number if we encounter it again (e.g., `1/1` and `2/2`). This ensures a unique mapping to `\mathbb{N}`.

### Practice & Summary

1.  Calculate `\lfloor -3.5 \rfloor` and `\lceil -3.5 \rceil`.
2.  If `f(x) = 2x+1` and `g(x) = x^2`, find `(f \circ g)(x)`.
3.  Is `f(x) = x^2` from `\mathbb{R} \rightarrow \mathbb{R}` surjective? (No, negative numbers are not mapped).

### Mini Cheat-Sheet

*   **Injective:** No two inputs share an output.
*   **Surjective:** The entire codomain is covered.
*   **Bijective:** A perfect pairing; allows for inversion.

Functions are a specific type of relation, leading to the study of how elements interact via Equivalence and Orderings.

---

## 3. Equivalence Relations and Partial Orderings (Posets)

Relations allow us to categorize data (Equivalence) or rank data (Partial Orderings).

### Core Theory

*   **Equivalence Relations:** Must be Reflexive (`aRa`), Symmetric (if `aRb`, then `bRa`), and Transitive. These partition a set into disjoint **Equivalence Classes**.
*   **Partial Orderings (Posets):** Must be Reflexive, **Antisymmetric** (if `aRb` and `bRa`, then `a = b`), and Transitive.

### Poset Mechanics & Hasse Diagrams

*   **Lexicographic Ordering:** `(a_1, b_1) \le (a_2, b_2)` if `a_1 < a_2` or (`a_1 = a_2` and `b_1 \le b_2`).
*   **Hasse Diagrams:** A visual poset representation.
    1.  **Upward Orientation:** Elements are placed higher to represent `a \le b`.
    2.  **Omissions:** Omit all self-loops and edges implied by transitivity.
*   **Bounds:**
    *   **Maximal/Minimal:** No elements above/below them.
    *   **Greatest/Least:** A unique element above/below all others.
    *   **LUB (Supremum)/GLB (Infimum):** The unique "tightest" bounds.
*   **Lattices:** A poset where every pair of elements has a LUB and GLB.

### Practice & Summary

1.  Identify the GLB of `\{20, 25\}` in the divisibility poset `\{2, 4, 5, 10, 12, 20, 25\}`.
    *   **Solution:** The GLB is `5`, as it is the largest integer dividing both `20` and `25`.
2.  List the equivalence class `[1]_4` for integers.
    *   **Solution:** `\{\dots, -3, 1, 5, 9, \dots\}`.

### Mini Cheat-Sheet

| Type          | Reflexive | Symmetric | Antisymmetric | Transitive |
| :------------ | :-------- | :-------- | :------------ | :--------- |
| Equivalence   | Yes       | Yes       | No            | Yes        |
| Partial Order | Yes       | No        | Yes           | Yes        |

Once relationships are defined, we apply combinatorial rules to count the ways elements can be arranged.

---

## 4. Counting and Combinatorics

Combinatorics enables the analysis of massive discrete structures by "counting without counting."

### Fundamental Principles

*   **Product Rule:** Sequential tasks (`n_1 \times n_2`).
*   **Sum Rule:** Mutually exclusive tasks (`n_1 + n_2`).
*   **Subtraction Rule:** `|A \cup B| = |A| + |B| - |A \cap B|`.
*   **Inclusion-Exclusion (Three Sets):** `|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|`.
*   **Division Rule:** Used when `n` ways lead to `d` identical results.
    *   *Circular Seating:* For 4 people at a round table, there are `4! = 24` linear arrangements. Due to rotational symmetry, each arrangement is identical in 4 positions. Total = `24 / 4 = 6`.
*   **Pigeonhole Principle (PHP):** If `n > m`, at least one box has `>1` item. **Generalized PHP:** At least one box contains `\lceil n/m \rceil` items.

### Permutations and Combinations

*   **Permutations (Order matters):** `P(n, r) = \frac{n!}{(n-r)!}`.
*   **Combinations (Order doesn't matter):** `C(n, r) = \frac{n!}{r!(n-r)!}`.
*   **Repetition:** For `n` objects with indistinguishable types: `\frac{n!}{k_1!k_2!\dots k_r!}`.
*   **Binomial Theorem:** `(x+y)^n = \sum_{k=0}^n C(n, k) x^{n-k} y^k`.

### Practice & Summary

1.  **PHP:** Minimum people to guarantee 5 born in the same month? `\lceil x/12 \rceil = 5 \rightarrow x = 49`.
2.  **Words:** Arrangements of "SUCCESS"? `\frac{7!}{3!2!1!1!} = 420`.

### Mini Cheat-Sheet

*   **P(n, r):** Order vital.
*   **C(n, r):** Selection only.
*   **Subtraction Rule:** Corrects for overcounting overlaps.

Counting elements leads naturally to the study of complex networks known as Graphs.

---

## 5. Graph Theory

Graph Theory models connectivity. Properties like "degree" determine network efficiency and limitations.

### Terminology and Laws

*   **Vertices and Edges:** Edges connect endpoints.
*   **Isolated Vertex:** A vertex with degree 0.
*   **Pendant Vertex:** A vertex with degree 1.
*   **Handshaking Theorem:** For undirected graphs, `2m = \sum deg(v)`.
*   **Directed Graphs (Digraphs):**
    *   `\sum deg^-(v) = \sum deg^+(v) = |E|`.
    *   **Loop Rule:** A loop in a digraph contributes exactly 1 to in-degree and 1 to out-degree.

### Graph Classification

*   **Simple Graphs:** No loops or multiple edges.
*   **Complete (K_n):** Edge between every distinct pair.
*   **Cycles (C_n):** A single closed loop (`n \ge 3`).
*   **Wheels (W_n):** `C_n` plus a center vertex connected to all.
*   **Bipartite:** Vertices can be partitioned into two sets such that no two vertices within the same set are adjacent (2-colorable).

### Exam Preparation

*   **Typical Tasks:** Calculating edges using Handshaking Theorem and verifying bipartiteness.
*   **Common Mistakes:** In undirected graphs, a loop contributes 2 to the degree. In digraphs, it contributes 1 to in-degree and 1 to out-degree.

### Mini Cheat-Sheet

| Family | Characteristic |
| :----- | :------------- |
| K_n    | Every vertex connected to all others. |
| C_n    | Vertices forming a single circuit. |
| W_n    | Cycle with a central "hub." |

---

## 6. Final Review Strategy & Rankings

### Most Important Topics Ranking

1.  **Predicate Logic:** Foundational for all notation.
2.  **Combinatorics:** High complexity/frequent exam presence.
3.  **Functions/Cardinality:** Essential for mapping logic.
4.  **Relations/Posets:** Data structure hierarchies.
5.  **Graph Theory:** Visual and intuitive network modeling.

### Night Before Exam Quick Revision

*   Verify Antisymmetry for Posets (`aRb \wedge bRa \rightarrow a=b`).
*   Apply Handshaking Theorem (`2m = \sum deg(v)`).
*   Check Hasse Diagram orientation (Larger = Higher).
*   Confirm Domain Restrictions for inverse functions.
*   Verify Digraph Loop Counts (1 in, 1 out).

### Top 20 Must-Know Formulas

1.  `\neg \forall x P(x) \equiv \exists x \neg P(x)`
2.  `\neg \exists x P(x) \equiv \forall x \neg P(x)`
3.  `\forall x (P(x) \wedge Q(x)) \equiv (\forall x P(x)) \wedge (\forall x Q(x))`
4.  `\exists x (P(x) \vee Q(x)) \equiv (\exists x P(x)) \vee (\exists x Q(x))`
5.  `f(x_1) = f(x_2) \rightarrow x_1 = x_2` (Injective)
6.  `Im(f) = B` (Surjective)
7.  `(g \circ f)(x) = g(f(x))`
8.  `\lfloor x \rfloor` (Max integer `\le x`)
9.  `\lceil x \rceil` (Min integer `\ge x`)
10. `a \equiv b \text{ (mod } m) \iff m | (a-b)`
11. `(a_1, b_1) \le (a_2, b_2)` if `a_1 < a_2 \vee (a_1 = a_2 \wedge b_1 \le b_2)`
12. `|A \cup B| = |A| + |B| - |A \cap B|`
13. `|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + \dots) + |A \cap B \cap C|`
14. `P(n, r) = \frac{n!}{(n-r)!}`
15. `C(n, r) = \frac{n!}{r!(n-r)!}`
16. `\frac{n!}{k_1!k_2!...k_r!}` (Indistinguishable objects)
17. `(x+y)^n = \sum C(n, k) x^{n-k} y^k`
18. `2m = \sum deg(v)`
19. `\sum deg^-(v) = \sum deg^+(v) = |E|`
20. `\lceil n/m \rceil` (Generalized PHP)

### Common Exam Problem Templates

*   Translating the "Successor" or "Limit" problems into logic.
*   Finding the inverse of `f(x) = 2x+3` or a restricted `x^2`.
*   Diagonal argument for Rational countability (remember: no repeats).
*   Finding LUB/GLB in a divisibility Hasse diagram.
*   Counting bit strings with specific start/end bits (Inclusion-Exclusion).
*   Circular seating arrangements (Division Rule).
*   Identifying bipartite graphs via 2-coloring.