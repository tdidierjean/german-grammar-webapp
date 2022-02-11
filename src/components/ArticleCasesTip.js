import React, { Component } from 'react'
import {
  Table,
  CardBody,
  Card,
} from 'reactstrap';

/**
 * This component displays a list of articles and their different cases, meant to be displayed within a GrammarTip component.
 */
class ArticleCasesTip extends Component {
    render() {
        return (
            <Card className="border-primary">
            <CardBody className="table-responsive">
                <h4 className="text-primary">Case of articles</h4>
                <Table className="table-tips table-row-borders">
                    <thead className="bg-primary text-white">
                    <tr>
                        <th>Case</th>
                        <th>Masculine</th>
                        <th>Feminine</th>
                        <th>Neuter</th>
                        <th>Plural</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="5" className="text-center">Definite articles</td>
                    </tr>
                    <tr>
                        <td>Nominative</td>
                        <td>der</td>
                        <td>die</td>
                        <td>das</td>
                        <td>die</td>
                    </tr>
                    <tr>
                        <td>Accusative</td>
                        <td>den</td>
                        <td>die</td>
                        <td>das</td>
                        <td>die</td>
                    </tr>
                    <tr>
                        <td>Dative</td>
                        <td>dem</td>
                        <td>der</td>
                        <td>dem</td>
                        <td>den</td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="text-center">Indefinite articles</td>
                    </tr>
                    <tr>
                        <td>Nominative</td>
                        <td>ein</td>
                        <td>eine</td>
                        <td>ein</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Accusative</td>
                        <td>einen</td>
                        <td>eine</td>
                        <td>ein</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Dative</td>
                        <td>einem</td>
                        <td>einer</td>
                        <td>einem</td>
                        <td>-</td>
                    </tr>
                    </tbody>
                    </Table>
                </CardBody>
            </Card>
      )
    }
}

export default ArticleCasesTip
